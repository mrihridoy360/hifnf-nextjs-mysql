import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { uploadFile, validateFile } from '@/lib/fileUpload';
import { ensureUploadDirectories } from '@/lib/ensureUploadDirs';

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

    // Get the file from the request
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { message: 'No file provided' },
        { status: 400 }
      );
    }

    // Validate the file before uploading
    const validation = validateFile(file);
    if (!validation.valid) {
      return NextResponse.json(
        { message: validation.error },
        { status: 400 }
      );
    }

    // Upload the file
    const result = await uploadFile(file);

    if (!result.success) {
      return NextResponse.json(
        { message: result.error || 'Failed to upload file' },
        { status: 500 }
      );
    }

    // Return the file URL and type
    return NextResponse.json({
      url: result.url,
      fileType: result.fileType
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Route segment config for file uploads
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

// Set maximum request body size
export const maxDuration = 60; // 60 seconds timeout for large file uploads
