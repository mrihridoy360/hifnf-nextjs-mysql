import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { v4 as uuidv4 } from 'uuid';
import { executeQuery } from '@/lib/db';
import { Friendship } from '@/types';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get friend requests sent to the user
    const friendRequests = await executeQuery<Friendship[]>({
      query: `
        SELECT
          f.*,
          u.id as user_id, u.username, u.first_name, u.last_name, u.profile_picture
        FROM friendships f
        JOIN users u ON f.requester_id = u.id
        WHERE f.addressee_id = ? AND f.status = 'pending'
        ORDER BY f.created_at DESC
      `,
      values: [session.user.id]
    });

    return NextResponse.json({ friendRequests });
  } catch (error) {
    console.error('Error fetching friend requests:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

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

    // Check if addressee exists
    const users = await executeQuery<any[]>({
      query: 'SELECT * FROM users WHERE id = ?',
      values: [addresseeId]
    });

    if (users.length === 0) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    // Check if a friendship already exists
    const existingFriendships = await executeQuery<any[]>({
      query: `
        SELECT * FROM friendships
        WHERE (requester_id = ? AND addressee_id = ?)
           OR (requester_id = ? AND addressee_id = ?)
      `,
      values: [session.user.id, addresseeId, addresseeId, session.user.id]
    });

    if (existingFriendships.length > 0) {
      const friendship = existingFriendships[0];

      if (friendship.status === 'pending') {
        return NextResponse.json(
          { message: 'Friend request already sent or received' },
          { status: 400 }
        );
      } else if (friendship.status === 'accepted') {
        return NextResponse.json(
          { message: 'Already friends' },
          { status: 400 }
        );
      } else if (friendship.status === 'blocked') {
        return NextResponse.json(
          { message: 'Unable to send friend request' },
          { status: 400 }
        );
      }
    }

    // Create friend request
    const friendshipId = uuidv4();
    await executeQuery({
      query: `
        INSERT INTO friendships (
          id, requester_id, addressee_id, status
        ) VALUES (?, ?, ?, 'pending')
      `,
      values: [friendshipId, session.user.id, addresseeId]
    });

    // Create notification for the addressee
    const notificationId = uuidv4();
    await executeQuery({
      query: `
        INSERT INTO notifications (
          id, user_id, sender_id, type, reference_id
        ) VALUES (?, ?, ?, 'friend_request', ?)
      `,
      values: [notificationId, addresseeId, session.user.id, friendshipId]
    });

    return NextResponse.json(
      { message: 'Friend request sent successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error sending friend request:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
