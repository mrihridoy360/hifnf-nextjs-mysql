import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { v4 as uuidv4 } from 'uuid';
import { executeQuery } from '@/lib/db';
import { authOptions } from '@/lib/auth';

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id: postId } = params;

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

      // If already disliked, remove it (toggle off)
      if (existingReaction.reaction_type === 'dislike') {
        await executeQuery({
          query: 'DELETE FROM reactions WHERE post_id = ? AND user_id = ?',
          values: [postId, session.user.id]
        });

        return NextResponse.json({
          reaction: null,
          message: 'Dislike removed'
        });
      }
      // If liked, change to dislike
      else {
        await executeQuery({
          query: 'UPDATE reactions SET reaction_type = ? WHERE post_id = ? AND user_id = ?',
          values: ['dislike', postId, session.user.id]
        });

        return NextResponse.json({
          reaction: 'dislike',
          message: 'Changed from like to dislike'
        });
      }
    } else {
      // User hasn't reacted to the post, so add dislike
      const reactionId = uuidv4();
      await executeQuery({
        query: 'INSERT INTO reactions (id, post_id, user_id, reaction_type) VALUES (?, ?, ?, ?)',
        values: [reactionId, postId, session.user.id, 'dislike']
      });

      return NextResponse.json({
        reaction: 'dislike',
        message: 'Dislike added'
      });
    }
  } catch (error) {
    console.error('Error disliking post:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
