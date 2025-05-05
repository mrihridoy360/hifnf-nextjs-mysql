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
    const query = url.searchParams.get('q') || '';
    const limit = parseInt(url.searchParams.get('limit') || '10');

    if (!query) {
      return NextResponse.json({ users: [] });
    }

    // Search for users by username, first name, or last name
    const users = await executeQuery({
      query: `
        SELECT id, username, first_name, last_name, profile_picture
        FROM users
        WHERE 
          username LIKE ? OR
          first_name LIKE ? OR
          last_name LIKE ?
        LIMIT ?
      `,
      values: [`%${query}%`, `%${query}%`, `%${query}%`, limit]
    });

    return NextResponse.json({ users });
  } catch (error) {
    console.error('Error searching users:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
