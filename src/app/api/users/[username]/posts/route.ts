import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { executeQuery } from '@/lib/db';
import { Post } from '@/types';

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user?.id;
    // Fix: Don't use trim() directly on params.username
    const username = decodeURIComponent(params.username);

    console.log('Posts API route received username:', username);

    console.log('Fetching posts for username:', username);

    // Get query parameters
    const url = new URL(req.url);
    const limit = parseInt(url.searchParams.get('limit') || '10');
    const offset = parseInt(url.searchParams.get('offset') || '0');

    // Get user ID from username
    console.log('Searching for user with username:', username);
    const users = await executeQuery<any[]>({
      query: 'SELECT id FROM users WHERE TRIM(username) = ?',
      values: [username.trim()]
    });

    console.log('User search result:', users);

    if (users.length === 0) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    const profileUserId = users[0].id;

    // Check if the current user is friends with the profile user
    let isFriend = false;

    if (userId && userId !== profileUserId) {
      const friendships = await executeQuery<any[]>({
        query: `
          SELECT status
          FROM friendships
          WHERE
            ((requester_id = ? AND addressee_id = ?) OR
            (requester_id = ? AND addressee_id = ?)) AND
            status = 'accepted'
        `,
        values: [userId, profileUserId, profileUserId, userId]
      });

      isFriend = friendships.length > 0;
    }

    // Build query based on privacy settings
    let query = `
      SELECT
        p.*,
        u.username, u.first_name, u.last_name, u.profile_picture,
        (SELECT COUNT(*) FROM reactions WHERE post_id = p.id AND reaction_type = 'like') AS likes_count,
        (SELECT COUNT(*) FROM reactions WHERE post_id = p.id AND reaction_type = 'dislike') AS dislikes_count,
        (SELECT COUNT(*) FROM comments WHERE post_id = p.id) AS comments_count,
        ${userId ? `EXISTS(SELECT 1 FROM reactions WHERE post_id = p.id AND user_id = '${userId}' AND reaction_type = 'like')` : 'FALSE'} AS liked_by_user,
        ${userId ? `EXISTS(SELECT 1 FROM reactions WHERE post_id = p.id AND user_id = '${userId}' AND reaction_type = 'dislike')` : 'FALSE'} AS disliked_by_user,
        ${userId ? `(SELECT reaction_type FROM reactions WHERE post_id = p.id AND user_id = '${userId}')` : 'NULL'} AS user_reaction
      FROM posts p
      JOIN users u ON p.user_id = u.id
      WHERE p.user_id = ?
    `;

    // Add privacy filter
    if (userId === profileUserId) {
      // User viewing their own profile - show all posts
    } else if (isFriend) {
      // User is a friend - show public and friends posts
      query += " AND (p.privacy = 'public' OR p.privacy = 'friends')";
    } else {
      // User is not a friend - show only public posts
      query += " AND p.privacy = 'public'";
    }

    query += `
      ORDER BY p.created_at DESC
      LIMIT ${limit} OFFSET ${offset}
    `;

    const posts = await executeQuery<Post[]>({
      query,
      values: [profileUserId]
    });

    return NextResponse.json({ posts });
  } catch (error) {
    console.error('Error fetching user posts:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
