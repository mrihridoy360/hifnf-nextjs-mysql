import fs from 'fs';
import path from 'path';

/**
 * Ensures that the upload directories exist
 */
export function ensureUploadDirectories(): void {
  try {
    // Get upload directory from environment variable or use default
    const uploadDir = process.env.UPLOAD_DIR || 'public/uploads';
    const imagesDir = path.join(process.cwd(), uploadDir, 'images');
    const videosDir = path.join(process.cwd(), uploadDir, 'videos');
    const profilesDir = path.join(process.cwd(), uploadDir, 'profiles');
    const commentsDir = path.join(process.cwd(), uploadDir, 'comments');

    // Create directories if they don't exist
    if (!fs.existsSync(path.join(process.cwd(), uploadDir))) {
      fs.mkdirSync(path.join(process.cwd(), uploadDir), { recursive: true });
    }

    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }

    if (!fs.existsSync(videosDir)) {
      fs.mkdirSync(videosDir, { recursive: true });
    }

    if (!fs.existsSync(profilesDir)) {
      fs.mkdirSync(profilesDir, { recursive: true });
    }

    if (!fs.existsSync(commentsDir)) {
      fs.mkdirSync(commentsDir, { recursive: true });
    }
  } catch (error) {
    console.error('Error ensuring upload directories exist:', error);
  }
}
