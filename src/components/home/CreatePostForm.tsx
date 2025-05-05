'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PhotoIcon, VideoCameraIcon, FaceSmileIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import FeelingSelector from './FeelingSelector';

export default function CreatePostForm() {
  const { data: session, status, update } = useSession();
  const router = useRouter();

  // Fetch user profile data to ensure we have the latest profile picture
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (status === 'authenticated' && session?.user?.username) {
        try {
          const response = await fetch(`/api/users/${session.user.username}?t=${new Date().getTime()}`);
          if (response.ok) {
            const data = await response.json();
            if (data.user?.profile_picture && data.user.profile_picture !== session.user.image) {
              console.log('Updating session with fetched profile picture:', data.user.profile_picture);
              await update({
                image: data.user.profile_picture
              });
            }
          }
        } catch (error) {
          console.error('Error fetching user profile:', error);
        }
      }
    };

    fetchUserProfile();
  }, [status, session?.user?.username, update]);
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);
  const [privacy, setPrivacy] = useState<'public' | 'friends' | 'private'>('public');
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [feeling, setFeeling] = useState<string | null>(null);
  const [feelingEmoji, setFeelingEmoji] = useState<string | null>(null);
  const [showFeelingSelector, setShowFeelingSelector] = useState<boolean>(false);

  if (status === 'loading') {
    return <div className="bg-white rounded-lg shadow p-4 animate-pulse h-32"></div>;
  }

  if (status !== 'authenticated') {
    return null; // Don't show post form for non-logged in users
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset previous errors
    setUploadError(null);

    // Validate file type
    const isImage = file.type.startsWith('image/');
    const isVideo = file.type.startsWith('video/');

    if (!isImage && !isVideo) {
      setUploadError('Please upload an image or video file');
      return;
    }

    // Validate file size
    const maxImageSize = 5 * 1024 * 1024; // 5MB
    const maxVideoSize = 100 * 1024 * 1024; // 100MB

    if (isImage && file.size > maxImageSize) {
      setUploadError(`Image size should not exceed ${maxImageSize / (1024 * 1024)}MB`);
      return;
    }

    if (isVideo && file.size > maxVideoSize) {
      setUploadError(`Video size should not exceed ${maxVideoSize / (1024 * 1024)}MB`);
      return;
    }

    setMediaFile(file);
    setMediaType(isImage ? 'image' : 'video');

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setMediaPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() && !mediaFile) return;

    setIsSubmitting(true);
    setUploadError(null);
    setUploadProgress(0);

    try {
      let imageUrl = null;
      let videoUrl = null;

      // Upload media file if present
      if (mediaFile) {
        setUploadProgress(10);

        // Create form data for file upload
        const mediaFormData = new FormData();
        mediaFormData.append('file', mediaFile);

        // Upload the file first
        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: mediaFormData,
        });

        if (!uploadResponse.ok) {
          const errorData = await uploadResponse.json();
          throw new Error(errorData.message || 'Failed to upload media');
        }

        setUploadProgress(70);

        const uploadResult = await uploadResponse.json();

        // Set the appropriate URL based on file type
        if (uploadResult.fileType === 'image') {
          imageUrl = uploadResult.url;
        } else if (uploadResult.fileType === 'video') {
          videoUrl = uploadResult.url;
        }
      }

      setUploadProgress(80);

      // Create form data for post creation
      const postFormData = new FormData();
      postFormData.append('content', content);
      postFormData.append('privacy', privacy);

      // Add media URLs if available
      if (imageUrl) {
        postFormData.append('imageUrl', imageUrl);
      }
      if (videoUrl) {
        postFormData.append('videoUrl', videoUrl);
      }

      // Add feeling if available
      if (feeling) {
        postFormData.append('feeling', feeling);
      }
      if (feelingEmoji) {
        postFormData.append('feelingEmoji', feelingEmoji);
      }

      // Create the post
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: postFormData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create post');
      }

      setUploadProgress(100);

      // Get the created post data
      const postData = await response.json();

      // Reset form
      setContent('');
      setMediaFile(null);
      setMediaPreview(null);
      setMediaType(null);
      setFeeling(null);
      setFeelingEmoji(null);
      setUploadProgress(0);

      // Trigger an immediate refresh of the feed
      // This is more reliable than router.refresh()
      window.dispatchEvent(new CustomEvent('new-post-created', {
        detail: { post: postData.post }
      }));

      // Also refresh the router cache
      router.refresh();
    } catch (error: any) {
      console.error('Error creating post:', error);
      setUploadError(error.message || 'An error occurred while creating the post');
      setUploadProgress(0);
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeMedia = () => {
    setMediaFile(null);
    setMediaPreview(null);
    setMediaType(null);
    setUploadError(null);
  };

  const handleFeelingSelect = (selectedFeeling: string, emoji: string) => {
    setFeeling(selectedFeeling);
    setFeelingEmoji(emoji);
  };

  const removeFeeling = () => {
    setFeeling(null);
    setFeelingEmoji(null);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-center space-x-4 mb-4">
        {/* Debug profile picture URL */}
        {console.log('Create post form profile picture:', session.user.image)}
        <img
          src={session.user.image || '/images/female_avatar.jpg'}
          alt={session.user.name || 'User'}
          className="h-10 w-10 rounded-full object-cover"
          crossOrigin="anonymous"
          onError={(e) => {
            console.error('Error loading profile picture in create post form:', e);
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Prevent infinite loop
            target.src = '/images/female_avatar.jpg';
          }}
        />
        <div className="flex-1">
          <Link href={`/profile/${session.user.username}`} className="font-medium text-gray-900 hover:underline">
            {session.user.name}
          </Link>
          <div className="flex items-center mt-1">
            <span className="text-xs text-gray-500 mr-2">Privacy:</span>
            <select
              value={privacy}
              onChange={(e) => setPrivacy(e.target.value as 'public' | 'friends' | 'private')}
              className="text-xs bg-gray-100 border border-gray-300 rounded px-2 py-1"
            >
              <option value="public">Public</option>
              <option value="friends">Friends</option>
              <option value="private">Only me</option>
            </select>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {feeling ? (
          <div className="mb-2 flex items-center text-sm text-gray-600">
            <span>Feeling {feelingEmoji} {feeling}</span>
            <button
              onClick={removeFeeling}
              className="ml-2 text-gray-400 hover:text-gray-600"
            >
              <XMarkIcon className="h-4 w-4" />
            </button>
          </div>
        ) : null}

        <textarea
          placeholder={`What's on your mind, ${session.user.name?.split(' ')[0]}?`}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows={3}
        />

        {uploadError && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-2 mb-2">
            <div className="flex">
              <div className="ml-3">
                <p className="text-sm text-red-700">{uploadError}</p>
              </div>
            </div>
          </div>
        )}

        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="mt-2 mb-2">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${uploadProgress}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1 text-center">
              Uploading... {uploadProgress}%
            </p>
          </div>
        )}

        {mediaPreview && (
          <div className="relative mt-2">
            {mediaType === 'image' ? (
              <img
                src={mediaPreview}
                alt="Preview"
                className="max-h-60 rounded-lg mx-auto"
              />
            ) : mediaType === 'video' ? (
              <video
                src={mediaPreview}
                controls
                className="max-h-60 w-full rounded-lg mx-auto"
              />
            ) : null}

            <button
              type="button"
              onClick={removeMedia}
              className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 text-white rounded-full p-1"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        )}

        <div className="flex items-center justify-between mt-3 border-t pt-3">
          <div className="flex space-x-2">
            <label className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <PhotoIcon className="h-6 w-6 text-green-500" />
              <span className="text-sm">Photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <label className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 p-2 rounded-md cursor-pointer">
              <VideoCameraIcon className="h-6 w-6 text-red-500" />
              <span className="text-sm">Video</span>
              <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <button
              type="button"
              className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 p-2 rounded-md"
              onClick={() => setShowFeelingSelector(true)}
            >
              <FaceSmileIcon className="h-6 w-6 text-yellow-500" />
              <span className="text-sm">Feeling</span>
            </button>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || (!content.trim() && !mediaFile)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Posting...' : 'Post'}
          </button>
        </div>
      </form>

      {/* Feeling Selector Modal */}
      <FeelingSelector
        isOpen={showFeelingSelector}
        onClose={() => setShowFeelingSelector(false)}
        onSelect={handleFeelingSelect}
      />
    </div>
  );
}
