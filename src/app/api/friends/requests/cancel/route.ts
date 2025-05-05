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

    const { addresseeId } = await req.json();

    if (!addresseeId) {
      return NextResponse.json(
        { message: 'Addressee ID is required' },
        { status: 400 }
      );
    }

    // Check if friend request exists
    const friendRequests = await executeQuery<any[]>({
      query: `
        SELECT * FROM friendships
        WHERE requester_id = ? AND addressee_id = ? AND status = 'pending'
      `,
      values: [session.user.id, addresseeId]
    });

    if (friendRequests.length === 0) {
      return NextResponse.json(
        { message: 'Friend request not found' },
        { status: 404 }
      );
    }

    // Delete the friend request
    await executeQuery({
      query: 'DELETE FROM friendships WHERE requester_id = ? AND addressee_id = ?',
      values: [session.user.id, addresseeId]
    });

    return NextResponse.json({ message: 'Friend request cancelled successfully' });
  } catch (error) {
    console.error('Error cancelling friend request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
