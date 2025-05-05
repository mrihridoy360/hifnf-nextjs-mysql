import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { executeQuery } from '@/lib/db';
import { Post } from '@/types';
import path from 'path';
import fs from 'fs';
import { ensureUploadDirectories } from '@/lib/ensureUploadDirs';

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    const postId = context.params.id;

    // Query to get post with user info
    let query = `
      SELECT
        p.*,
        u.username, u.first_name, u.last_name, u.profile_picture,
        (SELECT COUNT(*) FROM reactions WHERE post_id = p.id AND reaction_type = 'like') AS likes_count,
        (SELECT COUNT(*) FROM reactions WHERE post_id = p.id AND reaction_type = 'dislike') AS dislikes_count,
        (SELECT COUNT(*) FROM comments WHERE post_id = p.id) AS comments_count
    `;

    // Add user reaction info if user is authenticated
    if (userId) {
      query += `,
        (SELECT COUNT(*) > 0 FROM reactions WHERE post_id = p.id AND user_id = ? AND reaction_type = 'like') AS liked_by_user,
        (SELECT COUNT(*) > 0 FROM reactions WHERE post_id = p.id AND user_id = ? AND reaction_type = 'dislike') AS disliked_by_user,
        (SELECT reaction_type FROM reactions WHERE post_id = p.id AND user_id = ? LIMIT 1) AS user_reaction
      `;
    } else {
      query += `,
        FALSE AS liked_by_user,
        FALSE AS disliked_by_user,
        NULL AS user_reaction
      `;
    }

    query += `
      FROM posts p
      JOIN users u ON p.user_id = u.id
      WHERE p.id = ?
    `;

    const values = userId
      ? [userId, userId, userId, postId]
      : [postId];

    const posts = await executeQuery<Post[]>({
      query,
      values
    });

    if (posts.length === 0) {
      return NextResponse.json(
        { message: 'Post not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ post: posts[0] });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT (update) a post
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

    const postId = context.params.id;

    // Check if post exists and belongs to the user
    const posts = await executeQuery<Post[]>({
      query: 'SELECT * FROM posts WHERE id = ?',
      values: [postId]
    });

    if (posts.length === 0) {
      return NextResponse.json(
        { message: 'Post not found' },
        { status: 404 }
      );
    }

    const post = posts[0];

    // Check if the user is the owner of the post
    if (post.user_id !== session.user.id) {
      return NextResponse.json(
        { message: 'You can only edit your own posts' },
        { status: 403 }
      );
    }

    // Parse form data
    const formData = await req.formData();
    const content = formData.get('content') as string;
    const privacy = formData.get('privacy') as 'public' | 'friends' | 'private' || post.privacy;
    const feeling = formData.get('feeling') as string || post.feeling;
    const feelingEmoji = formData.get('feelingEmoji') as string || post.feeling_emoji;

    // Handle media
    const media = formData.get('media') as File | null;
    const removeMedia = formData.get('removeMedia') === 'true';

    let imageUrl = post.image_url;
    let videoUrl = post.video_url;

    // Handle media removal
    if (removeMedia) {
      // Remove existing image if any
      if (post.image_url) {
        const imagePath = path.join(process.cwd(), 'public', post.image_url);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
        imageUrl = null;
      }

      // Remove existing video if any
      if (post.video_url) {
        const videoPath = path.join(process.cwd(), 'public', post.video_url);
        if (fs.existsSync(videoPath)) {
          fs.unlinkSync(videoPath);
        }
        videoUrl = null;
      }
    }

    // Handle new media upload
    if (media) {
      const { uploadFile } = await import('@/lib/fileUpload');
      const result = await uploadFile(media);

      if (!result.success) {
        return NextResponse.json(
          { message: result.error || 'Failed to upload media' },
          { status: 400 }
        );
      }

      // Remove old media if new one is uploaded
      if (result.fileType === 'image') {
        if (post.image_url) {
          const oldImagePath = path.join(process.cwd(), 'public', post.image_url);
          if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
          }
        }
        imageUrl = result.url;
        videoUrl = null; // Can't have both image and video
      } else if (result.fileType === 'video') {
        if (post.video_url) {
          const oldVideoPath = path.join(process.cwd(), 'public', post.video_url);
          if (fs.existsSync(oldVideoPath)) {
            fs.unlinkSync(oldVideoPath);
          }
        }
        videoUrl = result.url;
        imageUrl = null; // Can't have both image and video
      }
    }

    // Validate content
    if (!content && !imageUrl && !videoUrl) {
      return NextResponse.json(
        { message: 'Post must have content or media' },
        { status: 400 }
      );
    }

    // Update post
    await executeQuery({
      query: `
        UPDATE posts
        SET content = ?, image_url = ?, video_url = ?, privacy = ?, feeling = ?, feeling_emoji = ?, updated_at = NOW()
        WHERE id = ?
      `,
      values: [content, imageUrl, videoUrl, privacy, feeling, feelingEmoji, postId]
    });

    // Get updated post with user info
    const updatedPosts = await executeQuery<Post[]>({
      query: `
        SELECT
          p.*,
          u.username, u.first_name, u.last_name, u.profile_picture,
          (SELECT COUNT(*) FROM reactions WHERE post_id = p.id AND reaction_type = 'like') AS likes_count,
          (SELECT COUNT(*) FROM reactions WHERE post_id = p.id AND reaction_type = 'dislike') AS dislikes_count,
          (SELECT COUNT(*) FROM comments WHERE post_id = p.id) AS comments_count,
          (SELECT reaction_type FROM reactions WHERE post_id = p.id AND user_id = ?) AS user_reaction
        FROM posts p
        JOIN users u ON p.user_id = u.id
        WHERE p.id = ?
      `,
      values: [session.user.id, postId]
    });

    const updatedPost = updatedPosts[0];

    // Format the post to include user object
    const formattedPost = {
      ...updatedPost,
      user: {
        username: updatedPost.username,
        first_name: updatedPost.first_name,
        last_name: updatedPost.last_name,
        profile_picture: updatedPost.profile_picture
      }
    };

    return NextResponse.json({
      message: 'Post updated successfully',
      post: formattedPost
    });
  } catch (error) {
    console.error('Error updating post:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// DELETE a post
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

    const postId = context.params.id;

    // Check if post exists and belongs to the user
    const posts = await executeQuery<Post[]>({
      query: 'SELECT * FROM posts WHERE id = ?',
      values: [postId]
    });

    if (posts.length === 0) {
      return NextResponse.json(
        { message: 'Post not found' },
        { status: 404 }
      );
    }

    const post = posts[0];

    // Check if the user is the owner of the post
    if (post.user_id !== session.user.id) {
      return NextResponse.json(
        { message: 'You can only delete your own posts' },
        { status: 403 }
      );
    }

    // Delete media files if they exist
    if (post.image_url) {
      const imagePath = path.join(process.cwd(), 'public', post.image_url);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    if (post.video_url) {
      const videoPath = path.join(process.cwd(), 'public', post.video_url);
      if (fs.existsSync(videoPath)) {
        fs.unlinkSync(videoPath);
      }
    }

    // Delete all comments for this post
    const comments = await executeQuery<any[]>({
      query: 'SELECT * FROM comments WHERE post_id = ?',
      values: [postId]
    });

    // Delete comment images if they exist
    for (const comment of comments) {
      if (comment.image_url) {
        const imagePath = path.join(process.cwd(), 'public', comment.image_url);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
    }

    // Delete mentions for comments on this post
    await executeQuery({
      query: 'DELETE FROM mentions WHERE comment_id IN (SELECT id FROM comments WHERE post_id = ?)',
      values: [postId]
    });

    // Delete reactions for comments on this post
    await executeQuery({
      query: 'DELETE FROM reactions WHERE comment_id IN (SELECT id FROM comments WHERE post_id = ?)',
      values: [postId]
    });

    // Delete comments
    await executeQuery({
      query: 'DELETE FROM comments WHERE post_id = ?',
      values: [postId]
    });

    // Delete reactions for this post
    await executeQuery({
      query: 'DELETE FROM reactions WHERE post_id = ?',
      values: [postId]
    });

    // Delete notifications related to this post
    await executeQuery({
      query: 'DELETE FROM notifications WHERE reference_id = ?',
      values: [postId]
    });

    // Finally, delete the post
    await executeQuery({
      query: 'DELETE FROM posts WHERE id = ?',
      values: [postId]
    });

    return NextResponse.json({
      success: true,
      message: 'Post deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
