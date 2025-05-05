import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { executeQuery } from '@/lib/db';

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    const postId = context.params.id;
    
    // Get reaction type from query params (like or dislike)
    const { searchParams } = new URL(req.url);
    const reactionType = searchParams.get('type') || 'like';
    
    // Validate reaction type
    if (reactionType !== 'like' && reactionType !== 'dislike') {
      return NextResponse.json(
        { message: 'Invalid reaction type' },
        { status: 400 }
      );
    }
    
    // Get users who reacted to the post
    const users = await executeQuery({
      query: `
        SELECT 
          u.id, 
          u.username, 
          u.first_name, 
          u.last_name, 
          u.profile_picture,
          r.created_at as reacted_at
        FROM reactions r
        JOIN users u ON r.user_id = u.id
        WHERE r.post_id = ? AND r.reaction_type = ? AND r.comment_id IS NULL
        ORDER BY r.created_at DESC
        LIMIT 50
      `,
      values: [postId, reactionType]
    });
    
    return NextResponse.json({ 
      users,
      count: users.length,
      reaction_type: reactionType
    });
  } catch (error) {
    console.error('Error fetching reactions:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
