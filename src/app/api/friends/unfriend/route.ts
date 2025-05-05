import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { executeQuery } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { friendId } = await req.json();

    if (!friendId) {
      return NextResponse.json(
        { message: 'Friend ID is required' },
        { status: 400 }
      );
    }

    // Check if friendship exists
    const friendships = await executeQuery<any[]>({
      query: `
        SELECT * FROM friendships
        WHERE 
          ((requester_id = ? AND addressee_id = ?) OR
          (requester_id = ? AND addressee_id = ?)) AND
          status = 'accepted'
      `,
      values: [session.user.id, friendId, friendId, session.user.id]
    });

    if (friendships.length === 0) {
      return NextResponse.json(
        { message: 'Friendship not found' },
        { status: 404 }
      );
    }

    // Delete the friendship
    await executeQuery({
      query: `
        DELETE FROM friendships
        WHERE 
          (requester_id = ? AND addressee_id = ?) OR
          (requester_id = ? AND addressee_id = ?)
      `,
      values: [session.user.id, friendId, friendId, session.user.id]
    });

    return NextResponse.json({ message: 'Unfriended successfully' });
  } catch (error) {
    console.error('Error unfriending:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
