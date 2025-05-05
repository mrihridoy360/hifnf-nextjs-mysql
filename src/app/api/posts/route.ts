import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { v4 as uuidv4 } from 'uuid';
import { executeQuery } from '@/lib/db';
import { Post } from '@/types';
import { ensureUploadDirectories } from '@/lib/ensureUploadDirs';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;

    // Get query parameters
    const url = new URL(req.url);
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    // Simplified query to avoid prepared statement issues
    let query = `
      SELECT
        p.*,
        u.id as author_id,
        u.username,
        u.first_name,
        u.last_name,
        u.profile_picture,
        (SELECT COUNT(*) FROM reactions WHERE post_id = p.id AND reaction_type = 'like') AS likes_count,
        (SELECT COUNT(*) FROM reactions WHERE post_id = p.id AND reaction_type = 'dislike') AS dislikes_count,
        (SELECT COUNT(*) FROM comments WHERE post_id = p.id) AS comments_count,
        ${userId ? `EXISTS(SELECT 1 FROM reactions WHERE post_id = p.id AND user_id = '${userId}' AND reaction_type = 'like')` : 'FALSE'} AS liked_by_user,
        ${userId ? `EXISTS(SELECT 1 FROM reactions WHERE post_id = p.id AND user_id = '${userId}' AND reaction_type = 'dislike')` : 'FALSE'} AS disliked_by_user,
        ${userId ? `(SELECT reaction_type FROM reactions WHERE post_id = p.id AND user_id = '${userId}')` : 'NULL'} AS user_reaction
      FROM posts p
      JOIN users u ON p.user_id = u.id
      ORDER BY p.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;

    console.log('Fetching posts with query:', query);

    const posts = await executeQuery<Post[]>({
      query,
      values: []
    });

    // Log the first post's profile picture for debugging
    if (posts.length > 0) {
      console.log('First post user profile picture:', posts[0].user?.profile_picture);
    }

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
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

    // Handle form data for post creation
    const formData = await req.formData();
    const content = formData.get('content') as string;
    const privacy = formData.get('privacy') as 'public' | 'friends' | 'private' || 'public';

    // Check if we have direct URLs from the separate upload endpoint
    const directImageUrl = formData.get('imageUrl') as string;
    const directVideoUrl = formData.get('videoUrl') as string;

    // Get feeling data if available
    const feeling = formData.get('feeling') as string;
    const feelingEmoji = formData.get('feelingEmoji') as string;

    // Or if we have a media file directly uploaded here
    const media = formData.get('media') as File | null;

    // Validate input
    if (!content && !media && !directImageUrl && !directVideoUrl) {
      return NextResponse.json(
        { message: 'Post must have content or media' },
        { status: 400 }
      );
    }

    // Initialize URLs
    let imageUrl = directImageUrl || null;
    let videoUrl = directVideoUrl || null;

    // Handle file upload if media is provided directly
    if (media) {
      const { uploadFile } = await import('@/lib/fileUpload');
      const result = await uploadFile(media);

      if (!result.success) {
        return NextResponse.json(
          { message: result.error || 'Failed to upload media' },
          { status: 400 }
        );
      }

      // Set the appropriate URL based on file type
      if (result.fileType === 'image') {
        imageUrl = result.url || null;
      } else if (result.fileType === 'video') {
        videoUrl = result.url || null;
      }
    }

    // Create post
    const postId = uuidv4();
    await executeQuery({
      query: `
        INSERT INTO posts (
          id, user_id, content, image_url, video_url, feeling, feeling_emoji, privacy
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      values: [postId, session.user.id, content, imageUrl, videoUrl, feeling || null, feelingEmoji || null, privacy]
    });

    // Get the created post with user info
    const posts = await executeQuery<Post[]>({
      query: `
        SELECT
          p.*,
          u.id as user_id,
          u.username,
          u.first_name,
          u.last_name,
          u.profile_picture,
          0 AS likes_count,
          0 AS dislikes_count,
          0 AS comments_count,
          FALSE AS liked_by_user,
          FALSE AS disliked_by_user,
          NULL AS user_reaction
        FROM posts p
        JOIN users u ON p.user_id = u.id
        WHERE p.id = ?
      `,
      values: [postId]
    });

    return NextResponse.json(
      { message: 'Post created successfully', post: posts[0] },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating post:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
