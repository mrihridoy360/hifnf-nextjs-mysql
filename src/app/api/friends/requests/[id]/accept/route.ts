import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { v4 as uuidv4 } from 'uuid';
import { executeQuery } from '@/lib/db';

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession();
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }
    
    const friendshipId = params.id;
    
    // Check if the friendship exists and belongs to the user
    const friendships = await executeQuery<any[]>({
      query: `
        SELECT * FROM friendships 
        WHERE id = ? AND addressee_id = ? AND status = 'pending'
      `,
      values: [friendshipId, session.user.id]
    });
    
    if (friendships.length === 0) {
      return NextResponse.json(
        { message: 'Friend request not found' },
        { status: 404 }
      );
    }
    
    const friendship = friendships[0];
    
    // Update friendship status
    await executeQuery({
      query: `
        UPDATE friendships 
        SET status = 'accepted', updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `,
      values: [friendshipId]
    });
    
    // Create notification for the requester
    const notificationId = uuidv4();
    await executeQuery({
      query: `
        INSERT INTO notifications (
          id, user_id, sender_id, type, reference_id
        ) VALUES (?, ?, ?, 'friend_request', ?)
      `,
      values: [notificationId, friendship.requester_id, session.user.id, friendshipId]
    });
    
    return NextResponse.json({ message: 'Friend request accepted' });
  } catch (error) {
    console.error('Error accepting friend request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
