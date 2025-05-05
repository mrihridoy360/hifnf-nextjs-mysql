import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { executeQuery } from '@/lib/db';
import { ensureUploadDirectories } from '@/lib/ensureUploadDirs';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  try {
    // Ensure upload directories exist
    ensureUploadDirectories();

    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Parse form data
    const formData = await req.formData();
    
    // Extract basic profile information
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const bio = formData.get('bio') as string;
    const location = formData.get('location') as string;
    const website = formData.get('website') as string;
    const dateOfBirth = formData.get('dateOfBirth') as string;
    
    // Handle profile picture upload
    const profilePicture = formData.get('profilePicture') as File | null;
    let profilePictureUrl = formData.get('currentProfilePicture') as string;
    
    if (profilePicture && profilePicture.size > 0) {
      const fileExtension = path.extname(profilePicture.name).toLowerCase();
      const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
      
      if (!validExtensions.includes(fileExtension)) {
        return NextResponse.json(
          { message: 'Invalid file type for profile picture. Only images are allowed.' },
          { status: 400 }
        );
      }

      // Generate unique filename
      const uniqueFilename = `${uuidv4()}${fileExtension}`;
      const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'profiles');
      const filePath = path.join(uploadDir, uniqueFilename);
      
      // Convert file to buffer and save
      const buffer = Buffer.from(await profilePicture.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
      
      // Set profile picture URL
      profilePictureUrl = `/uploads/profiles/${uniqueFilename}`;
    }
    
    // Handle cover photo upload
    const coverPhoto = formData.get('coverPhoto') as File | null;
    let coverPhotoUrl = formData.get('currentCoverPhoto') as string;
    
    if (coverPhoto && coverPhoto.size > 0) {
      const fileExtension = path.extname(coverPhoto.name).toLowerCase();
      const validExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
      
      if (!validExtensions.includes(fileExtension)) {
        return NextResponse.json(
          { message: 'Invalid file type for cover photo. Only images are allowed.' },
          { status: 400 }
        );
      }

      // Generate unique filename
      const uniqueFilename = `cover_${uuidv4()}${fileExtension}`;
      const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'profiles');
      const filePath = path.join(uploadDir, uniqueFilename);
      
      // Convert file to buffer and save
      const buffer = Buffer.from(await coverPhoto.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
      
      // Set cover photo URL
      coverPhotoUrl = `/uploads/profiles/${uniqueFilename}`;
    }
    
    // Validate required fields
    if (!firstName || !lastName) {
      return NextResponse.json(
        { message: 'First name and last name are required' },
        { status: 400 }
      );
    }
    
    // Update user profile
    await executeQuery({
      query: `
        UPDATE users
        SET 
          first_name = ?,
          last_name = ?,
          profile_picture = ?,
          cover_photo = ?,
          bio = ?,
          location = ?,
          website = ?,
          date_of_birth = ?
        WHERE id = ?
      `,
      values: [
        firstName,
        lastName,
        profilePictureUrl,
        coverPhotoUrl,
        bio || null,
        location || null,
        website || null,
        dateOfBirth || null,
        session.user.id
      ]
    });
    
    // Get updated user profile
    const users = await executeQuery({
      query: `
        SELECT 
          id, username, email, first_name, last_name, profile_picture, cover_photo,
          bio, location, website, date_of_birth, created_at
        FROM users
        WHERE id = ?
      `,
      values: [session.user.id]
    });
    
    return NextResponse.json({
      message: 'Profile updated successfully',
      user: users[0]
    });
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
