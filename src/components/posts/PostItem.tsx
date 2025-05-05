'use client';

import { useState, useRef, useEffect } from 'react';
import { Post } from '@/types';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import ReactionPopover from '../reactions/ReactionPopover';
import ReactionsList from '../reactions/ReactionsList';
import { XMarkIcon, PhotoIcon, FaceSmileIcon } from '@heroicons/react/24/outline';
import {
  HandThumbUpIcon,
  HandThumbDownIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  PencilIcon,
  TrashIcon,
  EllipsisHorizontalIcon
} from '@heroicons/react/24/outline';
import {
  HandThumbUpIcon as HandThumbUpIconSolid,
  HandThumbDownIcon as HandThumbDownIconSolid
} from '@heroicons/react/24/solid';

interface PostItemProps {
  post: Post;
  onDelete?: (postId: string) => void;
  onUpdate?: (updatedPost: Post) => void;
}

export default function PostItem({ post, onDelete, onUpdate }: PostItemProps) {
  const { data: session } = useSession();
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  // Process post to ensure user data is correctly structured
  const processPost = (post: Post): Post => {
    const processedPost = { ...post };

    // Create a proper user object if it doesn't exist
    if (!processedPost.user) {
      processedPost.user = {
        username: post.username as string,
        first_name: post.first_name as string,
        last_name: post.last_name as string,
        profile_picture: post.profile_picture as string
      };
    }

    // Make sure user_id is set correctly
    if (!processedPost.user_id) {
      if (post.user_id) {
        processedPost.user_id = post.user_id;
        console.log('Set user_id from post.user_id:', post.user_id);
      } else if (post.author_id) {
        processedPost.user_id = post.author_id;
        console.log('Set user_id from post.author_id:', post.author_id);
      } else {
        console.warn('No user_id or author_id available for post:', post.id);
      }
    }

    console.log('Processed post:', processedPost);
    return processedPost;
  };

  // Log the original post for debugging
  console.log('Original post:', post);

  const [currentPost, setCurrentPost] = useState<Post>(processPost(post));
  const [isLiking, setIsLiking] = useState(false);
  const [isDisliking, setIsDisliking] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState('');
  const [editPrivacy, setEditPrivacy] = useState<'public' | 'friends' | 'private'>('public');
  const [editFeeling, setEditFeeling] = useState<string | null>(null);
  const [editFeelingEmoji, setEditFeelingEmoji] = useState<string | null>(null);
  const [editMediaFile, setEditMediaFile] = useState<File | null>(null);
  const [editMediaPreview, setEditMediaPreview] = useState<string | null>(null);
  const [removeMedia, setRemoveMedia] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editError, setEditError] = useState<string | null>(null);
  const [showFeelingSelector, setShowFeelingSelector] = useState(false);
  const [showReactionsList, setShowReactionsList] = useState(false);
  const [reactionType, setReactionType] = useState<'like' | 'dislike'>('like');

  // Handle click outside to close menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Update currentPost when post prop changes
  useEffect(() => {
    console.log('Post prop changed:', post);
    console.log('User reaction:', post.user_reaction);
    setCurrentPost(processPost(post));
  }, [post]);

  const handleReaction = async (reactionType: 'like' | 'dislike') => {
    try {
      if (reactionType === 'like') {
        setIsLiking(true);
      } else {
        setIsDisliking(true);
      }

      // Optimistically update UI
      setCurrentPost(prevPost => {
        const currentReaction = prevPost.user_reaction;
        let newLikesCount = prevPost.likes_count || 0;
        let newDislikesCount = prevPost.dislikes_count || 0;

        if (reactionType === 'like') {
          if (currentReaction === 'like') {
            newLikesCount -= 1;
          } else if (currentReaction === 'dislike') {
            newLikesCount += 1;
            newDislikesCount -= 1;
          } else {
            newLikesCount += 1;
          }
        } else if (reactionType === 'dislike') {
          if (currentReaction === 'dislike') {
            newDislikesCount -= 1;
          } else if (currentReaction === 'like') {
            newLikesCount -= 1;
            newDislikesCount += 1;
          } else {
            newDislikesCount += 1;
          }
        }

        return {
          ...prevPost,
          likes_count: newLikesCount,
          dislikes_count: newDislikesCount,
          user_reaction: currentReaction === reactionType ? null : reactionType
        };
      });

      // Send request to server
      const response = await fetch(`/api/posts/${post.id}/like`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reaction_type: reactionType }),
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error(`Failed to ${reactionType} post`);
      }

      // Get the updated post data from the response
      const data = await response.json();
      console.log('Server response after reaction:', data);

      if (data.post) {
        // Update the current post with the server data
        setCurrentPost(processPost(data.post));
      }
    } catch (error) {
      console.error(`Error ${reactionType}ing post:`, error);
      // Revert optimistic update if there was an error
      const response = await fetch(`/api/posts/${post.id}`);
      if (response.ok) {
        const data = await response.json();
        setCurrentPost(data.post);
      }
    } finally {
      if (reactionType === 'like') {
        setIsLiking(false);
      } else {
        setIsDisliking(false);
      }
    }
  };

  const handleLike = () => handleReaction('like');
  const handleDislike = () => handleReaction('dislike');

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Stop event propagation
    console.log('Toggle menu clicked, current state:', showMenu);
    setShowMenu(!showMenu);
  };

  const handleShowReactions = (type: 'like' | 'dislike') => {
    setReactionType(type);
    setShowReactionsList(true);
  };

  const handleEdit = () => {
    // Check if user is authorized to edit
    if (session?.user?.id !== currentPost.user_id) {
      alert('You can only edit your own posts');
      return;
    }

    // Initialize edit form with current post data
    setEditContent(currentPost.content || '');
    setEditPrivacy(currentPost.privacy || 'public');
    setEditFeeling(currentPost.feeling || null);
    setEditFeelingEmoji(currentPost.feeling_emoji || null);

    // Set media preview if post has media
    if (currentPost.image_url) {
      setEditMediaPreview(currentPost.image_url);
    } else if (currentPost.video_url) {
      setEditMediaPreview(currentPost.video_url);
    } else {
      setEditMediaPreview(null);
    }

    // Reset other states
    setEditMediaFile(null);
    setRemoveMedia(false);
    setEditError(null);

    // Show edit form
    setIsEditing(true);
    setShowMenu(false);
  };

  // Handle media file selection for edit
  const handleEditFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Reset remove media flag if a new file is selected
    setRemoveMedia(false);
    setEditMediaFile(file);

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditMediaPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // Handle removing media for edit
  const handleRemoveMedia = () => {
    setEditMediaFile(null);
    setEditMediaPreview(null);
    setRemoveMedia(true);
  };

  // Handle feeling selection for edit
  const handleFeelingSelect = (selectedFeeling: string, emoji: string) => {
    setEditFeeling(selectedFeeling);
    setEditFeelingEmoji(emoji);
    setShowFeelingSelector(false);
  };

  // Handle removing feeling for edit
  const removeFeeling = (e: React.MouseEvent) => {
    e.preventDefault();
    setEditFeeling(null);
    setEditFeelingEmoji(null);
  };

  // Handle form submission for edit
  const handleSubmitEdit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!editContent.trim() && !editMediaFile && !editMediaPreview) {
      setEditError('Post must have content or media');
      return;
    }

    setIsSubmitting(true);
    setEditError(null);

    try {
      const formData = new FormData();
      formData.append('content', editContent);
      formData.append('privacy', editPrivacy);

      if (editFeeling) {
        formData.append('feeling', editFeeling);
        formData.append('feelingEmoji', editFeelingEmoji || '');
      }

      if (editMediaFile) {
        formData.append('media', editMediaFile);
      }

      if (removeMedia) {
        formData.append('removeMedia', 'true');
      }

      const response = await fetch(`/api/posts/${currentPost.id}`, {
        method: 'PUT',
        body: formData,
        credentials: 'include'
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update post');
      }

      const data = await response.json();
      console.log('Post updated successfully:', data);

      // Update the current post with the updated data
      setCurrentPost(processPost(data.post));

      // Call onUpdate callback if provided
      if (onUpdate) {
        onUpdate(data.post);
      }

      // Close the edit form
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating post:', error);
      setEditError(error instanceof Error ? error.message : 'Failed to update post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Cancel editing
  const cancelEdit = () => {
    setIsEditing(false);
    setEditContent('');
    setEditMediaFile(null);
    setEditMediaPreview(null);
    setRemoveMedia(false);
    setEditError(null);
  };

  const handleDelete = async () => {
    // Check if user is authorized to delete
    if (session?.user?.id !== currentPost.user_id) {
      alert('You can only delete your own posts');
      return;
    }

    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      setIsDeleting(true);
      try {
        console.log('Deleting post:', currentPost.id);
        const response = await fetch(`/api/posts/${currentPost.id}`, {
          method: 'DELETE',
          credentials: 'include'
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Delete response error:', errorData);
          throw new Error(errorData.message || 'Failed to delete post');
        }

        const result = await response.json();
        console.log('Delete response:', result);

        // Close menu
        setShowMenu(false);

        // Call onDelete callback if provided
        if (onDelete) {
          onDelete(currentPost.id);
        } else {
          // Refresh the page or update the UI if no callback
          router.refresh();
        }
        // Redirect to home page if we're on a single post page
        if (window.location.pathname.includes(`/posts/${currentPost.id}`)) {
          router.push('/');
        }
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post. Please try again.');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <Link href={`/profile/${currentPost.user?.username}`}>
              {/* Debug profile picture URL */}
              {console.log('PostItem user profile picture:', currentPost.user?.profile_picture)}
              <img
                src={currentPost.user?.profile_picture || '/images/female_avatar.jpg'}
                alt={`${currentPost.user?.first_name} ${currentPost.user?.last_name}`}
                className="h-10 w-10 rounded-full object-cover"
                crossOrigin="anonymous"
                onError={(e) => {
                  console.error('Error loading profile picture:', e);
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.src = '/images/female_avatar.jpg';
                }}
              />
            </Link>
            <div>
              <Link href={`/profile/${currentPost.user?.username}`} className="font-medium text-gray-900 hover:underline">
                {currentPost.user?.first_name} {currentPost.user?.last_name}
              </Link>
              {currentPost.feeling && (
                <p className="text-sm text-gray-700">
                  is feeling {currentPost.feeling_emoji} {currentPost.feeling}
                </p>
              )}
              <p className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(currentPost.created_at), { addSuffix: true })}
                {currentPost.privacy !== 'public' && (
                  <span className="ml-2">
                    • {currentPost.privacy === 'friends' ? 'Friends' : 'Only me'}
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Post options menu */}
          <div className="relative" ref={menuRef}>
            <button
              className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={toggleMenu}
              aria-label="Post options"
              title="Post options"
              id={`post-menu-${currentPost.id}`}
            >
              <EllipsisHorizontalIcon className="h-5 w-5" />
            </button>

            {/* Dropdown menu */}
            {showMenu && (
              <div className="absolute right-0 mt-1 w-36 bg-white rounded-md shadow-lg z-50 py-1 border border-gray-200">
                {session?.user?.id === currentPost.user_id && (
                  <>
                    <button
                      onClick={handleEdit}
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      disabled={isDeleting}
                    >
                      <PencilIcon className="h-4 w-4 mr-2" />
                      Edit Post
                    </button>
                    <button
                      onClick={handleDelete}
                      className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      disabled={isDeleting}
                    >
                      <TrashIcon className="h-4 w-4 mr-2" />
                      {isDeleting ? 'Deleting...' : 'Delete Post'}
                    </button>
                  </>
                )}
                {/* Add other menu options that are available for all users */}
                <button
                  className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  <ShareIcon className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>
            )}
          </div>
        </div>

        {currentPost.content && (
          <p className="text-gray-800 mb-4">{currentPost.content}</p>
        )}

        {currentPost.image_url && (
          <div className="mb-4">
            <img
              src={currentPost.image_url}
              alt="Post image"
              className="rounded-lg w-full object-cover max-h-[500px]"
              loading="lazy"
            />
          </div>
        )}

        {currentPost.video_url && (
          <div className="mb-4">
            <video
              src={currentPost.video_url}
              controls
              preload="metadata"
              className="rounded-lg w-full max-h-[500px]"
              poster={`${currentPost.video_url}?poster=true`}
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <ReactionPopover
            postId={currentPost.id}
            likesCount={currentPost.likes_count || 0}
            dislikesCount={currentPost.dislikes_count || 0}
            onShowReactions={handleShowReactions}
          />
          <div>
            {(currentPost.comments_count || 0) > 0 && (
              <span>{currentPost.comments_count} {currentPost.comments_count === 1 ? 'comment' : 'comments'}</span>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-2">
        <div className="flex justify-between">
          <div className="flex items-center">
            <button
              onClick={handleLike}
              disabled={isLiking || isDisliking}
              className={`flex items-center space-x-1 mr-2 ${
                currentPost.user_reaction === 'like' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
              } transition-all duration-200 ease-in-out ${isLiking ? 'opacity-70' : ''}`}
            >
              {isLiking ? (
                <div className="animate-pulse">
                  {currentPost.user_reaction === 'like' ? (
                    <HandThumbUpIconSolid className="h-5 w-5" />
                  ) : (
                    <HandThumbUpIcon className="h-5 w-5" />
                  )}
                </div>
              ) : currentPost.user_reaction === 'like' ? (
                <HandThumbUpIconSolid className="h-5 w-5 transform transition-transform duration-200 hover:scale-110" />
              ) : (
                <HandThumbUpIcon className="h-5 w-5 transform transition-transform duration-200 hover:scale-110" />
              )}
              <span>Like</span>
            </button>

            <button
              onClick={handleDislike}
              disabled={isLiking || isDisliking}
              className={`flex items-center space-x-1 ${
                currentPost.user_reaction === 'dislike' ? 'text-red-600' : 'text-gray-500 hover:text-gray-700'
              } transition-all duration-200 ease-in-out ${isDisliking ? 'opacity-70' : ''}`}
            >
              {isDisliking ? (
                <div className="animate-pulse">
                  {currentPost.user_reaction === 'dislike' ? (
                    <HandThumbDownIconSolid className="h-5 w-5" />
                  ) : (
                    <HandThumbDownIcon className="h-5 w-5" />
                  )}
                </div>
              ) : currentPost.user_reaction === 'dislike' ? (
                <HandThumbDownIconSolid className="h-5 w-5 transform transition-transform duration-200 hover:scale-110" />
              ) : (
                <HandThumbDownIcon className="h-5 w-5 transform transition-transform duration-200 hover:scale-110" />
              )}
              <span>Dislike</span>
            </button>
          </div>

          <Link href={`/posts/${currentPost.id}`} className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
            <ChatBubbleLeftIcon className="h-5 w-5" />
            <span>Comment</span>
          </Link>

          <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
            <ShareIcon className="h-5 w-5" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Reactions List Modal */}
      <ReactionsList
        postId={currentPost.id}
        reactionType={reactionType}
        isOpen={showReactionsList}
        onClose={() => setShowReactionsList(false)}
      />

      {/* Inline Edit Form */}
      {isEditing && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75">
          <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-4">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-medium">Edit Post</h3>
                <button
                  onClick={cancelEdit}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              {editError && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 m-4 rounded">
                  {editError}
                </div>
              )}

              <form onSubmit={handleSubmitEdit} className="p-4">
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <span className="text-sm text-gray-600 mr-2">Privacy:</span>
                    <select
                      value={editPrivacy}
                      onChange={(e) => setEditPrivacy(e.target.value as 'public' | 'friends' | 'private')}
                      className="text-sm bg-gray-100 border border-gray-300 rounded px-2 py-1"
                    >
                      <option value="public">Public</option>
                      <option value="friends">Friends</option>
                      <option value="private">Only me</option>
                    </select>
                  </div>

                  {editFeeling ? (
                    <div className="mb-2 flex items-center text-sm text-gray-600">
                      <span>Feeling {editFeelingEmoji} {editFeeling}</span>
                      <button
                        onClick={removeFeeling}
                        className="ml-2 text-gray-400 hover:text-gray-600"
                      >
                        <XMarkIcon className="h-4 w-4" />
                      </button>
                    </div>
                  ) : null}

                  <textarea
                    placeholder="What's on your mind?"
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    rows={4}
                  />
                </div>

                {editMediaPreview && (
                  <div className="mb-4 relative">
                    {editMediaPreview.includes('video') || editMediaPreview.includes('mp4') ? (
                      <video
                        src={editMediaPreview}
                        controls
                        className="w-full rounded-lg max-h-[300px] object-contain"
                      />
                    ) : (
                      <img
                        src={editMediaPreview}
                        alt="Post media preview"
                        className="w-full rounded-lg max-h-[300px] object-contain"
                      />
                    )}
                    <button
                      type="button"
                      onClick={handleRemoveMedia}
                      className="absolute top-2 right-2 bg-gray-800 bg-opacity-70 text-white rounded-full p-1 hover:bg-opacity-100"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                )}

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <label className="cursor-pointer">
                      <input
                        type="file"
                        accept="image/*,video/*"
                        onChange={handleEditFileChange}
                        className="hidden"
                      />
                      <div className="flex items-center space-x-1 text-gray-600 hover:bg-gray-100 p-2 rounded-md">
                        <PhotoIcon className="h-6 w-6 text-green-500" />
                        <span className="text-sm">Photo/Video</span>
                      </div>
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

                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={cancelEdit}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || (!editContent.trim() && !editMediaFile && !editMediaPreview)}
                      className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </div>
              </form>

              {/* Feeling Selector */}
              {showFeelingSelector && (
                <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center">
                  <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 p-4">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-medium">How are you feeling?</h3>
                      <button
                        onClick={() => setShowFeelingSelector(false)}
                        className="text-gray-400 hover:text-gray-500"
                      >
                        <XMarkIcon className="h-6 w-6" />
                      </button>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { feeling: 'Happy', emoji: '😊' },
                        { feeling: 'Sad', emoji: '😢' },
                        { feeling: 'Angry', emoji: '😠' },
                        { feeling: 'Loved', emoji: '❤️' },
                        { feeling: 'Excited', emoji: '🎉' },
                        { feeling: 'Thankful', emoji: '🙏' },
                        { feeling: 'Blessed', emoji: '😇' },
                        { feeling: 'Tired', emoji: '😴' },
                        { feeling: 'Motivated', emoji: '💪' },
                        { feeling: 'Proud', emoji: '🥰' }
                      ].map(item => (
                        <button
                          key={item.feeling}
                          onClick={() => handleFeelingSelect(item.feeling, item.emoji)}
                          className="flex items-center p-2 hover:bg-gray-100 rounded"
                        >
                          <span className="text-2xl mr-2">{item.emoji}</span>
                          <span>{item.feeling}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
