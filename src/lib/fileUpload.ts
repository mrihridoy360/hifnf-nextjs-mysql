import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Define allowed file types
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
const ALLOWED_VIDEO_TYPES = ['video/mp4', 'video/webm', 'video/ogg'];

// Maximum file sizes (in bytes)
const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100MB

export interface FileUploadResult {
  success: boolean;
  filePath?: string;
  url?: string;
  error?: string;
  fileType?: 'image' | 'video';
}

/**
 * Validates a file based on its type and size
 */
export function validateFile(file: File): { valid: boolean; error?: string } {
  // Check if file type is allowed
  if (ALLOWED_IMAGE_TYPES.includes(file.type)) {
    if (file.size > MAX_IMAGE_SIZE) {
      return { valid: false, error: `Image size should not exceed ${MAX_IMAGE_SIZE / (1024 * 1024)}MB` };
    }
  } else if (ALLOWED_VIDEO_TYPES.includes(file.type)) {
    if (file.size > MAX_VIDEO_SIZE) {
      return { valid: false, error: `Video size should not exceed ${MAX_VIDEO_SIZE / (1024 * 1024)}MB` };
    }
  } else {
    return { valid: false, error: 'File type not supported' };
  }

  return { valid: true };
}

/**
 * Uploads a file to the server's filesystem
 */
export async function uploadFile(file: File): Promise<FileUploadResult> {
  try {
    // Validate the file
    const validation = validateFile(file);
    if (!validation.valid) {
      return { success: false, error: validation.error };
    }

    // Determine file type and directory
    let fileType: 'image' | 'video';
    let subDir: string;

    if (ALLOWED_IMAGE_TYPES.includes(file.type)) {
      fileType = 'image';
      subDir = 'images';
    } else if (ALLOWED_VIDEO_TYPES.includes(file.type)) {
      fileType = 'video';
      subDir = 'videos';
    } else {
      return { success: false, error: 'Unsupported file type' };
    }

    // Create a unique filename
    const fileExtension = file.name.split('.').pop() || '';
    const fileName = `${uuidv4()}.${fileExtension}`;
    
    // Get upload directory from environment variable or use default
    const uploadDir = process.env.UPLOAD_DIR || 'public/uploads';
    const dirPath = path.join(process.cwd(), uploadDir, subDir);
    const filePath = path.join(dirPath, fileName);
    
    // Ensure directory exists
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // Convert File object to Buffer and save to filesystem
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    fs.writeFileSync(filePath, buffer);
    
    // Return the file URL (relative to public directory)
    const url = `/uploads/${subDir}/${fileName}`;
    
    return {
      success: true,
      filePath,
      url,
      fileType
    };
  } catch (error) {
    console.error('Error uploading file:', error);
    return {
      success: false,
      error: 'Failed to upload file'
    };
  }
}
