import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { executeQuery } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, username, email, password, dateOfBirth } = await req.json();

    // Validate input
    if (!firstName || !lastName || !username || !email || !password || !dateOfBirth) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingEmailUsers = await executeQuery<any[]>({
      query: 'SELECT * FROM users WHERE email = ?',
      values: [email]
    });

    if (existingEmailUsers.length > 0) {
      return NextResponse.json(
        { message: 'Email already in use' },
        { status: 400 }
      );
    }

    // Check if username already exists
    const existingUsernameUsers = await executeQuery<any[]>({
      query: 'SELECT * FROM users WHERE username = ?',
      values: [username]
    });

    if (existingUsernameUsers.length > 0) {
      return NextResponse.json(
        { message: 'Username already taken' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const userId = uuidv4();
    await executeQuery({
      query: `
        INSERT INTO users (
          id, username, email, password, first_name, last_name, date_of_birth
        ) VALUES (?, ?, ?, ?, ?, ?, ?)
      `,
      values: [userId, username, email, hashedPassword, firstName, lastName, dateOfBirth]
    });

    return NextResponse.json(
      { message: 'User registered successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
