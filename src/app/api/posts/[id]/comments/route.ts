import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { v4 as uuidv4 } from 'uuid';
import { executeQuery } from '@/lib/db';
import { Comment } from '@/types';
import { ensureUploadDirectories } from '@/lib/ensureUploadDirs';
import path from 'path';
import fs from 'fs';

// GET comments for a post
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const postId = context.params.id;

    // Get query parameters
    const url = new URL(req.url);
    const limit = parseInt(url.searchParams.get('limit') || '50');
    const offset = parseInt(url.searchParams.get('offset') || '0');
    const parentId = url.searchParams.get('parent_id') || null;

    // Validate post exists
    const posts = await executeQuery({
      query: 'SELECT * FROM posts WHERE id = ?',
      values: [postId]
    });

    if (!posts || (posts as any[]).length === 0) {
      return NextResponse.json(
        { message: 'Post not found' },
        { status: 404 }
      );
    }

    // Simplified query to avoid prepared statement issues
    let query = `
      SELECT
        c.*,
        u.username, u.first_name, u.last_name, u.profile_picture,
        (SELECT COUNT(*) FROM reactions WHERE comment_id = c.id AND reaction_type = 'like') AS likes_count,
        FALSE AS liked_by_user,
        (SELECT COUNT(*) FROM comments WHERE parent_id = c.id) AS replies_count
      FROM comments c
      JOIN users u ON c.user_id = u.id
      WHERE c.post_id = '${postId}' AND ${parentId ? `c.parent_id = '${parentId}'` : 'c.parent_id IS NULL'}
      ORDER BY c.created_at ASC
      LIMIT ${limit} OFFSET ${offset}
    `;

    const values: any[] = [];

    const comments = await executeQuery<Comment[]>({
      query,
      values
    });

    // Get mentions for each comment
    for (const comment of comments) {
      const mentions = await executeQuery({
        query: `
          SELECT m.*, u.username, u.first_name, u.last_name, u.profile_picture
          FROM mentions m
          JOIN users u ON m.user_id = u.id
          WHERE m.comment_id = ?
        `,
        values: [comment.id]
      });

      comment.mentions = mentions as any;
    }

    return NextResponse.json({ comments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// POST a new comment
export async function POST(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    // Ensure upload directories exist
    ensureUploadDirectories();

    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const postId = context.params.id;

    // Validate post exists
    const posts = await executeQuery({
      query: 'SELECT * FROM posts WHERE id = ?',
      values: [postId]
    });

    if (!posts || (posts as any[]).length === 0) {
      return NextResponse.json(
        { message: 'Post not found' },
        { status: 404 }
      );
    }

    // Parse form data
    const formData = await req.formData();
    const content = formData.get('content') as string;
    const parentId = formData.get('parent_id') as string || null;
    const mentionsJson = formData.get('mentions') as string || '[]';
    const mentions = JSON.parse(mentionsJson);

    // Handle image upload
    const imageFile = formData.get('image') as File | null;
    let imageUrl = null;

    if (imageFile && imageFile.size > 0) {
      const fileExtension = path.extname(imageFile.name).toLowerCase();
      const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

      if (!validExtensions.includes(fileExtension)) {
        return NextResponse.json(
          { message: 'Invalid file type. Only images are allowed.' },
          { status: 400 }
        );
      }

      // Generate unique filename
      const uniqueFilename = `${uuidv4()}${fileExtension}`;
      const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'comments');
      const filePath = path.join(uploadDir, uniqueFilename);

      // Convert file to buffer and save
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      fs.writeFileSync(filePath, buffer);

      // Set image URL
      imageUrl = `/uploads/comments/${uniqueFilename}`;
    }

    // Validate content
    if (!content && !imageUrl) {
      return NextResponse.json(
        { message: 'Comment must have content or an image' },
        { status: 400 }
      );
    }

    // If parentId is provided, validate it exists
    if (parentId) {
      const parentComments = await executeQuery({
        query: 'SELECT * FROM comments WHERE id = ? AND post_id = ?',
        values: [parentId, postId]
      });

      if (!parentComments || (parentComments as any[]).length === 0) {
        return NextResponse.json(
          { message: 'Parent comment not found' },
          { status: 404 }
        );
      }
    }

    // Create comment
    const commentId = uuidv4();
    await executeQuery({
      query: `
        INSERT INTO comments (
          id, post_id, user_id, parent_id, content, image_url
        ) VALUES (?, ?, ?, ?, ?, ?)
      `,
      values: [commentId, postId, session.user.id, parentId, content, imageUrl]
    });

    // Process mentions
    if (mentions && mentions.length > 0) {
      for (const mentionedUserId of mentions) {
        // Validate user exists
        const users = await executeQuery({
          query: 'SELECT * FROM users WHERE id = ?',
          values: [mentionedUserId]
        });

        if (users && (users as any[]).length > 0) {
          const mentionId = uuidv4();
          await executeQuery({
            query: 'INSERT INTO mentions (id, comment_id, user_id) VALUES (?, ?, ?)',
            values: [mentionId, commentId, mentionedUserId]
          });

          // Create notification for mentioned user
          const notificationId = uuidv4();
          await executeQuery({
            query: `
              INSERT INTO notifications (
                id, user_id, sender_id, type, content, reference_id
              ) VALUES (?, ?, ?, ?, ?, ?)
            `,
            values: [
              notificationId,
              mentionedUserId,
              session.user.id,
              'tag',
              'mentioned you in a comment',
              commentId
            ]
          });
        }
      }
    }

    // Get the created comment with user info
    const comments = await executeQuery<Comment[]>({
      query: `
        SELECT
          c.*,
          u.username, u.first_name, u.last_name, u.profile_picture,
          0 AS likes_count,
          FALSE AS liked_by_user,
          0 AS replies_count
        FROM comments c
        JOIN users u ON c.user_id = u.id
        WHERE c.id = ?
      `,
      values: [commentId]
    });

    // Get mentions for the comment
    const commentMentions = await executeQuery({
      query: `
        SELECT m.*, u.username, u.first_name, u.last_name, u.profile_picture
        FROM mentions m
        JOIN users u ON m.user_id = u.id
        WHERE m.comment_id = ?
      `,
      values: [commentId]
    });

    if (comments && comments.length > 0) {
      comments[0].mentions = commentMentions as any;
    }

    return NextResponse.json(
      { message: 'Comment created successfully', comment: comments[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating comment:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
