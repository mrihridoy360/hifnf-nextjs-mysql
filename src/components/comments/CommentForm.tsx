'use client';

import { useState, useRef, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Comment } from '@/types';
import { PaperAirplaneIcon, PhotoIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import MentionSelector from './MentionSelector';

interface CommentFormProps {
  postId: string;
  parentId?: string;
  onSubmit: (comment: Comment) => void;
  onCancel?: () => void;
  placeholder?: string;
  isReply?: boolean;
  isEditing?: boolean;
  initialContent?: string;
  initialImage?: string | null;
}

export default function CommentForm({
  postId,
  parentId,
  onSubmit,
  onCancel,
  placeholder = 'Write a comment...',
  isReply = false,
  isEditing = false,
  initialContent = '',
  initialImage = null
}: CommentFormProps) {
  const { data: session } = useSession();
  const [content, setContent] = useState(initialContent);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(initialImage);
  const [submitting, setSubmitting] = useState(false);
  const [showMentionSelector, setShowMentionSelector] = useState(false);
  const [mentionQuery, setMentionQuery] = useState('');
  const [mentionPosition, setMentionPosition] = useState({ start: 0, end: 0 });
  const [selectedMentions, setSelectedMentions] = useState<string[]>([]);
  const [showGifSelector, setShowGifSelector] = useState(false);
  const [gifSearchQuery, setGifSearchQuery] = useState('');
  const [gifResults, setGifResults] = useState<any[]>([]);
  const [loadingGifs, setLoadingGifs] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);

    // Check for @ symbol to trigger mention selector
    const cursorPosition = e.target.selectionStart;
    const textBeforeCursor = newContent.substring(0, cursorPosition);
    const atSymbolIndex = textBeforeCursor.lastIndexOf('@');

    if (atSymbolIndex !== -1 && (atSymbolIndex === 0 || newContent[atSymbolIndex - 1] === ' ')) {
      const query = textBeforeCursor.substring(atSymbolIndex + 1);
      if (query.length > 0 && !query.includes(' ')) {
        setMentionQuery(query);
        setMentionPosition({ start: atSymbolIndex, end: cursorPosition });
        setShowMentionSelector(true);
      } else if (query.includes(' ')) {
        setShowMentionSelector(false);
      }
    } else {
      setShowMentionSelector(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  const searchGifs = async (query: string) => {
    if (!query.trim()) {
      setGifResults([]);
      return;
    }

    setLoadingGifs(true);

    try {
      // Using Giphy API - you'll need to create a .env file with your Giphy API key
      // or use another GIF API of your choice
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=YOUR_GIPHY_API_KEY&q=${encodeURIComponent(query)}&limit=20`);

      if (response.ok) {
        const data = await response.json();
        setGifResults(data.data || []);
      } else {
        console.error('Failed to fetch GIFs');
      }
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    } finally {
      setLoadingGifs(false);
    }
  };

  const handleGifSelect = async (gif: any) => {
    try {
      // Convert GIF URL to File object
      const response = await fetch(gif.images.fixed_height.url);
      const blob = await response.blob();
      const file = new File([blob], `giphy-${gif.id}.gif`, { type: 'image/gif' });

      setImageFile(file);
      setImagePreview(gif.images.fixed_height.url);
      setShowGifSelector(false);
    } catch (error) {
      console.error('Error selecting GIF:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if ((!content.trim() && !imageFile) || !session?.user) {
      return;
    }

    setSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('content', content);

      if (parentId) {
        formData.append('parent_id', parentId);
      }

      if (imageFile) {
        formData.append('image', imageFile);
      }

      if (selectedMentions.length > 0) {
        formData.append('mentions', JSON.stringify(selectedMentions));
      }

      let url = `/api/posts/${postId}/comments`;
      let method = 'POST';

      // If editing, use the update endpoint
      if (isEditing) {
        // Assuming the comment ID is in the URL or passed as a prop
        const commentId = window.location.pathname.split('/').pop();
        url = `/api/comments/${commentId}`;
        method = 'PUT';
      }

      const response = await fetch(url, {
        method,
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        onSubmit(data.comment);

        if (!isEditing) {
          // Only reset form if not editing
          setContent('');
          setImageFile(null);
          setImagePreview(null);
          setSelectedMentions([]);
        }
      } else {
        console.error('Failed to submit comment');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleSelectMention = (userId: string, username: string) => {
    // Replace the @query with @username in the content
    const beforeMention = content.substring(0, mentionPosition.start);
    const afterMention = content.substring(mentionPosition.end);
    const newContent = `${beforeMention}@${username} ${afterMention}`;

    setContent(newContent);
    setShowMentionSelector(false);

    // Add user ID to selected mentions
    if (!selectedMentions.includes(userId)) {
      setSelectedMentions([...selectedMentions, userId]);
    }

    // Focus back on the input and place cursor after the inserted mention
    if (inputRef.current) {
      inputRef.current.focus();
      const newCursorPosition = mentionPosition.start + username.length + 2; // +2 for @ and space
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.selectionStart = newCursorPosition;
          inputRef.current.selectionEnd = newCursorPosition;
        }
      }, 0);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex ${isReply ? '' : 'mt-4'}`}>
      <div className="flex-shrink-0 mr-3">
        <img
          src={session?.user?.image || 'https://via.placeholder.com/40'}
          alt={session?.user?.name || 'User'}
          className="h-8 w-8 rounded-full"
        />
      </div>
      <div className="flex-grow relative">
        <div className="bg-gray-100 rounded-lg p-2">
          <textarea
            ref={inputRef}
            value={content}
            onChange={handleContentChange}
            placeholder={placeholder}
            className="w-full bg-transparent border-none focus:outline-none resize-none min-h-[40px]"
            rows={isReply ? 2 : 3}
          />

          {imagePreview && (
            <div className="relative mt-2">
              <img
                src={imagePreview}
                alt="Preview"
                className="max-h-40 rounded-lg"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-1 right-1 bg-gray-800 bg-opacity-50 rounded-full p-1 text-white"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="flex items-center justify-between mt-2">
            <div className="flex space-x-3">
              {/* Image upload button */}
              <label className="cursor-pointer text-gray-500 hover:text-gray-700">
                <PhotoIcon className="h-5 w-5" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>

              {/* GIF button */}
              <button
                type="button"
                onClick={() => setShowGifSelector(!showGifSelector)}
                className="text-gray-500 hover:text-gray-700"
              >
                <span className="text-sm font-medium">GIF</span>
              </button>
            </div>

            <div className="flex space-x-2">
              {onCancel && (
                <button
                  type="button"
                  onClick={onCancel}
                  className="text-gray-500 hover:text-gray-700"
                >
                  Cancel
                </button>
              )}

              <button
                type="submit"
                disabled={submitting || (!content.trim() && !imageFile)}
                className={`text-blue-600 ${
                  submitting || (!content.trim() && !imageFile)
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:text-blue-700'
                }`}
              >
                {submitting ? (
                  <span className="text-xs">Sending...</span>
                ) : (
                  <PaperAirplaneIcon className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {/* GIF selector */}
          {showGifSelector && (
            <div className="mt-2 bg-white rounded-lg shadow-md p-2 border border-gray-200">
              <div className="flex mb-2">
                <input
                  type="text"
                  value={gifSearchQuery}
                  onChange={(e) => setGifSearchQuery(e.target.value)}
                  placeholder="Search GIFs..."
                  className="flex-grow border border-gray-300 rounded-l-md px-2 py-1 text-sm"
                />
                <button
                  type="button"
                  onClick={() => searchGifs(gifSearchQuery)}
                  className="bg-blue-500 text-white rounded-r-md px-2 py-1 text-sm"
                >
                  Search
                </button>
              </div>

              {loadingGifs && <div className="text-center py-2 text-sm">Loading GIFs...</div>}

              {!loadingGifs && gifResults.length > 0 && (
                <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
                  {gifResults.map((gif) => (
                    <div
                      key={gif.id}
                      className="cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => handleGifSelect(gif)}
                    >
                      <img
                        src={gif.images.fixed_height_small.url}
                        alt={gif.title}
                        className="w-full h-auto rounded-md"
                      />
                    </div>
                  ))}
                </div>
              )}

              {!loadingGifs && gifSearchQuery && gifResults.length === 0 && (
                <div className="text-center py-2 text-sm">No GIFs found. Try another search.</div>
              )}
            </div>
          )}
        </div>

        {showMentionSelector && (
          <div className="absolute z-10 mt-1 w-full">
            <MentionSelector
              query={mentionQuery}
              onSelect={handleSelectMention}
              onClose={() => setShowMentionSelector(false)}
            />
          </div>
        )}
      </div>
    </form>
  );
}
