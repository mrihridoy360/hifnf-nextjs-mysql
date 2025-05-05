import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { v4 as uuidv4 } from 'uuid';
import { executeQuery } from '@/lib/db';
import { authOptions } from '@/lib/auth';

// Helper function to get post data with reaction counts and user reaction status
async function getPostWithReactionData(postId: string, userId: string) {
  const posts = await executeQuery<any[]>({
    query: `
      SELECT
        p.*,
        u.username, u.first_name, u.last_name, u.profile_picture,
        (SELECT COUNT(*) FROM reactions WHERE post_id = p.id AND reaction_type = 'like') AS likes_count,
        (SELECT COUNT(*) FROM reactions WHERE post_id = p.id AND reaction_type = 'dislike') AS dislikes_count,
        (SELECT COUNT(*) FROM comments WHERE post_id = p.id) AS comments_count,
        (SELECT reaction_type FROM reactions WHERE post_id = p.id AND user_id = ?) AS user_reaction,
        EXISTS(SELECT 1 FROM reactions WHERE post_id = p.id AND user_id = ? AND reaction_type = 'like') AS liked_by_user,
        EXISTS(SELECT 1 FROM reactions WHERE post_id = p.id AND user_id = ? AND reaction_type = 'dislike') AS disliked_by_user
      FROM posts p
      JOIN users u ON p.user_id = u.id
      WHERE p.id = ?
    `,
    values: [userId, userId, userId, postId]
  });

  return posts.length > 0 ? posts[0] : null;
}

export async function POST(
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
    const { reaction_type = 'like' } = await req.json();

    // Check if post exists
    const posts = await executeQuery<any[]>({
      query: 'SELECT * FROM posts WHERE id = ?',
      values: [postId]
    });

    if (posts.length === 0) {
      return NextResponse.json(
        { message: 'Post not found' },
        { status: 404 }
      );
    }

    // Check if user already reacted to the post
    const reactions = await executeQuery<any[]>({
      query: 'SELECT * FROM reactions WHERE post_id = ? AND user_id = ?',
      values: [postId, session.user.id]
    });

    if (reactions.length > 0) {
      const existingReaction = reactions[0];

      // If the same reaction type, remove it (toggle off)
      if (existingReaction.reaction_type === reaction_type) {
        await executeQuery({
          query: 'DELETE FROM reactions WHERE post_id = ? AND user_id = ?',
          values: [postId, session.user.id]
        });

        // Get updated post data with reaction counts
        const updatedPost = await getPostWithReactionData(postId, session.user.id);

        return NextResponse.json({
          reaction: null,
          message: `${reaction_type} removed`,
          post: updatedPost
        });
      }
      // If different reaction type, update it
      else {
        await executeQuery({
          query: 'UPDATE reactions SET reaction_type = ? WHERE post_id = ? AND user_id = ?',
          values: [reaction_type, postId, session.user.id]
        });

        // Get updated post data with reaction counts
        const updatedPost = await getPostWithReactionData(postId, session.user.id);

        return NextResponse.json({
          reaction: reaction_type,
          message: `Changed from ${existingReaction.reaction_type} to ${reaction_type}`,
          post: updatedPost
        });
      }
    } else {
      // User hasn't reacted to the post, so add the reaction
      const reactionId = uuidv4();
      await executeQuery({
        query: 'INSERT INTO reactions (id, post_id, user_id, reaction_type) VALUES (?, ?, ?, ?)',
        values: [reactionId, postId, session.user.id, reaction_type]
      });

      // Get updated post data with reaction counts
      const updatedPost = await getPostWithReactionData(postId, session.user.id);

      return NextResponse.json({
        reaction: reaction_type,
        message: `${reaction_type} added`,
        post: updatedPost
      });
    }
  } catch (error) {
    console.error('Error reacting to post:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
