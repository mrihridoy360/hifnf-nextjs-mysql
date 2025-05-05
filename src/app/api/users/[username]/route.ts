import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { executeQuery } from '@/lib/db';
import { UserProfile } from '@/types';

export async function GET(
  _req: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    // Fix: Don't use trim() directly on params.username
    const username = decodeURIComponent(params.username);

    console.log('API route received username:', username);

    console.log('Fetching profile for username:', username);
    console.log('Session user:', session?.user?.id ? 'Authenticated' : 'Not authenticated');

    // Get user profile
    const users = await executeQuery<UserProfile[]>({
      query: `
        SELECT
          id, username, email, first_name, last_name, profile_picture, cover_photo,
          bio, location, website, date_of_birth, created_at
        FROM users
        WHERE TRIM(username) LIKE TRIM(?)
      `,
      values: [username]
    });

    console.log('User query result:', users);

    if (!users || users.length === 0) {
      console.log('User not found for username:', username);
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    let user = { ...users[0] };

    // Check if the current user is friends with the profile user
    let isFriend = false;
    let friendshipStatus = null;
    let isCurrentUser = false;

    if (session?.user?.id) {
      // Check if this is the current user's profile
      isCurrentUser = user.id === session.user.id;

      // If not the current user, check friendship status
      if (!isCurrentUser) {
        try {
          const friendships = await executeQuery<any[]>({
            query: `
              SELECT status
              FROM friendships
              WHERE
                (requester_id = ? AND addressee_id = ?) OR
                (requester_id = ? AND addressee_id = ?)
            `,
            values: [session.user.id, user.id, user.id, session.user.id]
          });

          console.log('Friendship query result:', friendships);

          if (friendships.length > 0) {
            friendshipStatus = friendships[0].status;
            isFriend = friendshipStatus === 'accepted';
          }
        } catch (error) {
          console.error('Error checking friendship status:', error);
          // Continue without friendship info if there's an error
        }
      }
    }

    // Get post count
    let postCount = 0;
    try {
      const postCountResult = await executeQuery<any[]>({
        query: 'SELECT COUNT(*) as count FROM posts WHERE user_id = ?',
        values: [user.id]
      });

      console.log('Post count result:', postCountResult);
      postCount = postCountResult[0]?.count || 0;
    } catch (error) {
      console.error('Error getting post count:', error);
    }

    // Get friend count
    let friendCount = 0;
    try {
      const friendCountResult = await executeQuery<any[]>({
        query: `
          SELECT COUNT(*) as count
          FROM friendships
          WHERE
            ((requester_id = ? OR addressee_id = ?)) AND
            status = 'accepted'
        `,
        values: [user.id, user.id]
      });

      console.log('Friend count result:', friendCountResult);
      friendCount = friendCountResult[0]?.count || 0;
    } catch (error) {
      console.error('Error getting friend count:', error);
    }

    // Remove sensitive information if not the current user
    if (!isCurrentUser) {
      // Create a new user object without email
      const { email, ...userWithoutEmail } = user;
      user = userWithoutEmail as UserProfile;

      // Format date of birth to just show month and day (not year)
      if (user.date_of_birth) {
        const date = new Date(user.date_of_birth);
        user.date_of_birth = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
      }
    }

    return NextResponse.json({
      user,
      isFriend,
      friendshipStatus,
      isCurrentUser,
      postCount,
      friendCount
    });
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
