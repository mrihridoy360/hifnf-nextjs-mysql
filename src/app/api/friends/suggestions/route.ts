import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { executeQuery } from '@/lib/db';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Get query parameters
    const url = new URL(req.url);
    const limit = parseInt(url.searchParams.get('limit') || '5');

    // Get users who are not friends with the current user
    // and who are not the current user
    const suggestions = await executeQuery<any[]>({
      query: `
        SELECT id, username, first_name, last_name, profile_picture
        FROM users
        WHERE id != ?
        AND id NOT IN (
          SELECT IF(requester_id = ?, addressee_id, requester_id)
          FROM friendships
          WHERE (requester_id = ? OR addressee_id = ?)
          AND status IN ('accepted', 'pending')
        )
        ORDER BY RAND()
        LIMIT ?
      `,
      values: [session.user.id, session.user.id, session.user.id, session.user.id, limit]
    });

    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error('Error fetching friend suggestions:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
