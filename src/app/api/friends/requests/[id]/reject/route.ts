import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
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
    
    // Update friendship status
    await executeQuery({
      query: `
        UPDATE friendships 
        SET status = 'rejected', updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
      `,
      values: [friendshipId]
    });
    
    return NextResponse.json({ message: 'Friend request rejected' });
  } catch (error) {
    console.error('Error rejecting friend request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
