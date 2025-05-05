import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { executeQuery } from '@/lib/db';
import { Comment } from '@/types';
import { ensureUploadDirectories } from '@/lib/ensureUploadDirs';
import path from 'path';
import fs from 'fs';

// GET a specific comment
export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const commentId = context.params.id;

    // Get the comment with user info
    const comments = await executeQuery<Comment[]>({
      query: `
        SELECT
          c.*,
          u.username, u.first_name, u.last_name, u.profile_picture,
          (SELECT COUNT(*) FROM reactions WHERE comment_id = c.id AND reaction_type = 'like') AS likes_count,
          FALSE AS liked_by_user,
          (SELECT COUNT(*) FROM comments WHERE parent_id = c.id) AS replies_count
        FROM comments c
        JOIN users u ON c.user_id = u.id
        WHERE c.id = ?
      `,
      values: [commentId]
    });

    if (comments.length === 0) {
      return NextResponse.json(
        { message: 'Comment not found' },
        { status: 404 }
      );
    }

    // Get mentions for the comment
    const mentions = await executeQuery({
      query: `
        SELECT m.*, u.username, u.first_name, u.last_name, u.profile_picture
        FROM mentions m
        JOIN users u ON m.user_id = u.id
        WHERE m.comment_id = ?
      `,
      values: [commentId]
    });

    comments[0].mentions = mentions as any;

    // Check if the user has liked the comment
    if (session?.user?.id) {
      const likes = await executeQuery({
        query: `
          SELECT * FROM reactions
          WHERE comment_id = ? AND user_id = ? AND reaction_type = 'like'
        `,
        values: [commentId, session.user.id]
      });

      comments[0].liked_by_user = (likes as any[]).length > 0;
    }

    return NextResponse.json({ comment: comments[0] });
  } catch (error) {
    console.error('Error fetching comment:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT (update) a comment
export async function PUT(
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

    const commentId = context.params.id;

    // Check if comment exists and belongs to the user
    const comments = await executeQuery<Comment[]>({
      query: 'SELECT * FROM comments WHERE id = ?',
      values: [commentId]
    });

    if (comments.length === 0) {
      return NextResponse.json(
        { message: 'Comment not found' },
        { status: 404 }
      );
    }

    const comment = comments[0];

    // Check if the user is the owner of the comment
    if (comment.user_id !== session.user.id) {
      return NextResponse.json(
        { message: 'You can only edit your own comments' },
        { status: 403 }
      );
    }

    // Parse form data
    const formData = await req.formData();
    const content = formData.get('content') as string;
    const mentionsJson = formData.get('mentions') as string || '[]';
    const mentions = JSON.parse(mentionsJson);

    // Handle image upload
    const imageFile = formData.get('image') as File | null;
    let imageUrl = comment.image_url;

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
      const uniqueFilename = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}${fileExtension}`;
      const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'comments');
      const filePath = path.join(uploadDir, uniqueFilename);

      // Convert file to buffer and save
      const buffer = Buffer.from(await imageFile.arrayBuffer());
      fs.writeFileSync(filePath, buffer);

      // Set image URL
      imageUrl = `/uploads/comments/${uniqueFilename}`;

      // Delete old image if exists
      if (comment.image_url) {
        const oldImagePath = path.join(process.cwd(), 'public', comment.image_url);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
    } else if (formData.get('removeImage') === 'true' && comment.image_url) {
      // Remove image if requested
      const oldImagePath = path.join(process.cwd(), 'public', comment.image_url);
      if (fs.existsSync(oldImagePath)) {
        fs.unlinkSync(oldImagePath);
      }
      imageUrl = null;
    }

    // Validate content
    if (!content && !imageUrl) {
      return NextResponse.json(
        { message: 'Comment must have content or an image' },
        { status: 400 }
      );
    }

    // Update comment
    await executeQuery({
      query: `
        UPDATE comments
        SET content = ?, image_url = ?, updated_at = NOW()
        WHERE id = ?
      `,
      values: [content, imageUrl, commentId]
    });

    // Process mentions
    // First, delete existing mentions
    await executeQuery({
      query: 'DELETE FROM mentions WHERE comment_id = ?',
      values: [commentId]
    });

    // Then add new mentions
    if (mentions && mentions.length > 0) {
      for (const mentionedUserId of mentions) {
        // Validate user exists
        const users = await executeQuery({
          query: 'SELECT * FROM users WHERE id = ?',
          values: [mentionedUserId]
        });

        if (users && (users as any[]).length > 0) {
          const mentionId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
          await executeQuery({
            query: 'INSERT INTO mentions (id, comment_id, user_id) VALUES (?, ?, ?)',
            values: [mentionId, commentId, mentionedUserId]
          });

          // Create notification for mentioned user
          const notificationId = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
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

    // Get the updated comment with user info
    const updatedComments = await executeQuery<Comment[]>({
      query: `
        SELECT
          c.*,
          u.username, u.first_name, u.last_name, u.profile_picture,
          (SELECT COUNT(*) FROM reactions WHERE comment_id = c.id AND reaction_type = 'like') AS likes_count,
          FALSE AS liked_by_user,
          (SELECT COUNT(*) FROM comments WHERE parent_id = c.id) AS replies_count
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

    if (updatedComments && updatedComments.length > 0) {
      updatedComments[0].mentions = commentMentions as any;
    }

    return NextResponse.json({ comment: updatedComments[0] });
  } catch (error) {
    console.error('Error updating comment:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE a comment
export async function DELETE(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const commentId = context.params.id;

    // Check if comment exists and belongs to the user
    const comments = await executeQuery<Comment[]>({
      query: 'SELECT * FROM comments WHERE id = ?',
      values: [commentId]
    });

    if (comments.length === 0) {
      return NextResponse.json(
        { message: 'Comment not found' },
        { status: 404 }
      );
    }

    const comment = comments[0];

    // Check if the user is the owner of the comment
    if (comment.user_id !== session.user.id) {
      return NextResponse.json(
        { message: 'You can only delete your own comments' },
        { status: 403 }
      );
    }

    // Delete image if exists
    if (comment.image_url) {
      const imagePath = path.join(process.cwd(), 'public', comment.image_url);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    // Delete mentions
    await executeQuery({
      query: 'DELETE FROM mentions WHERE comment_id = ?',
      values: [commentId]
    });

    // Delete reactions
    await executeQuery({
      query: 'DELETE FROM reactions WHERE comment_id = ?',
      values: [commentId]
    });

    // Delete notifications related to this comment
    await executeQuery({
      query: 'DELETE FROM notifications WHERE reference_id = ?',
      values: [commentId]
    });

    // Delete comment
    await executeQuery({
      query: 'DELETE FROM comments WHERE id = ?',
      values: [commentId]
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting comment:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
