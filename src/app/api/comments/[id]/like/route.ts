import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { v4 as uuidv4 } from 'uuid';
import { executeQuery } from '@/lib/db';

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

    const commentId = context.params.id;

    // Check if comment exists
    const comments = await executeQuery<any[]>({
      query: 'SELECT * FROM comments WHERE id = ?',
      values: [commentId]
    });

    if (comments.length === 0) {
      return NextResponse.json(
        { message: 'Comment not found' },
        { status: 404 }
      );
    }

    // Check if user already liked the comment
    const likes = await executeQuery<any[]>({
      query: 'SELECT * FROM reactions WHERE comment_id = ? AND user_id = ? AND reaction_type = ?',
      values: [commentId, session.user.id, 'like']
    });

    if (likes.length > 0) {
      // User already liked the comment, so unlike it
      await executeQuery({
        query: 'DELETE FROM reactions WHERE comment_id = ? AND user_id = ? AND reaction_type = ?',
        values: [commentId, session.user.id, 'like']
      });

      return NextResponse.json({ liked: false });
    } else {
      // User hasn't liked the comment, so like it
      const likeId = uuidv4();
      await executeQuery({
        query: 'INSERT INTO reactions (id, comment_id, user_id, reaction_type) VALUES (?, ?, ?, ?)',
        values: [likeId, commentId, session.user.id, 'like']
      });

      return NextResponse.json({ liked: true });
    }
  } catch (error) {
    console.error('Error liking comment:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
