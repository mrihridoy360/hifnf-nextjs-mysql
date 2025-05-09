import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import { executeQuery } from '@/lib/db';

export async function POST(req: NextRequest) {
  try {
    console.log('Registration API called');

    const body = await req.json();
    console.log('Registration request body:', {
      ...body,
      password: body.password ? '[REDACTED]' : undefined
    });

    const { firstName, lastName, username, email, password, dateOfBirth } = body;

    // Validate input
    if (!firstName || !lastName || !username || !email || !password || !dateOfBirth) {
      console.log('Missing required fields:', {
        firstName: !!firstName,
        lastName: !!lastName,
        username: !!username,
        email: !!email,
        password: !!password,
        dateOfBirth: !!dateOfBirth
      });
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    console.log('Database connection info:', {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      database: process.env.MYSQL_DATABASE
    });

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
    // Log more detailed error information
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    return NextResponse.json(
      { message: 'Internal server error', error: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}
