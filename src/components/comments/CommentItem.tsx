'use client';

import { useState, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { formatDistanceToNow } from 'date-fns';
import { Comment } from '@/types';
import { HeartIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';
import { ChatBubbleLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import CommentForm from './CommentForm';
import Image from 'next/image';

interface CommentItemProps {
  comment: Comment;
  postId: string;
  onLike: (commentId: string) => void;
  onReply?: (parentId: string, comment: Comment) => void;
  onEdit?: (commentId: string, updatedComment: Comment) => void;
  onDelete?: (commentId: string) => void;
  isReply?: boolean;
}

export default function CommentItem({
  comment,
  postId,
  onLike,
  onReply,
  onEdit,
  onDelete,
  isReply = false
}: CommentItemProps) {
  const { data: session } = useSession();
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [replies, setReplies] = useState<Comment[]>([]);
  const [loadingReplies, setLoadingReplies] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef<HTMLDivElement>(null);

  const handleLike = () => {
    onLike(comment.id);
  };

  const handleReplyClick = () => {
    setShowReplyForm(!showReplyForm);
  };

  const handleReplySubmit = (newComment: Comment) => {
    if (onReply) {
      onReply(comment.id, newComment);
    }
    setShowReplyForm(false);

    // Add the new reply to the replies list if it's already loaded
    if (showReplies && replies.length > 0) {
      setReplies([...replies, newComment]);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
    setShowOptions(false);
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this comment?')) {
      return;
    }

    try {
      const response = await fetch(`/api/comments/${comment.id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        if (onDelete) {
          onDelete(comment.id);
        }
      } else {
        console.error('Failed to delete comment');
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const handleEditSubmit = (updatedComment: Comment) => {
    if (onEdit) {
      onEdit(comment.id, updatedComment);
    }
    setIsEditing(false);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const loadReplies = async () => {
    if (!showReplies && (comment.replies_count || 0) > 0) {
      setLoadingReplies(true);
      try {
        const response = await fetch(`/api/posts/${postId}/comments?parent_id=${comment.id}`);
        if (response.ok) {
          const data = await response.json();
          setReplies(data.comments);
        }
      } catch (error) {
        console.error('Error loading replies:', error);
      } finally {
        setLoadingReplies(false);
      }
    }
    setShowReplies(!showReplies);
  };

  // Highlight mentioned users in the comment content
  const renderContent = () => {
    if (!comment.mentions || comment.mentions.length === 0) {
      return <p className="text-gray-800">{comment.content}</p>;
    }

    let content = comment.content;
    const mentionedUsers = comment.mentions.map(mention => mention.user);

    // Replace @username with highlighted version
    mentionedUsers.forEach(user => {
      if (user && user.username) {
        const regex = new RegExp(`@${user.username}`, 'g');
        content = content.replace(regex, `<a href="/profile/${user.username}" class="text-blue-600 font-medium">@${user.username}</a>`);
      }
    });

    return <p className="text-gray-800" dangerouslySetInnerHTML={{ __html: content }} />;
  };

  return (
    <div className={`flex ${isReply ? 'ml-12 mt-2' : 'mt-4'}`}>
      <div className="flex-shrink-0 mr-3">
        <Link href={`/profile/${comment.user?.username}`}>
          {/* Debug comment profile picture URL */}
          {console.log('Comment profile picture:', comment.user?.profile_picture)}
          <img
            src={comment.user?.profile_picture || '/images/female_avatar.jpg'}
            alt={`${comment.user?.first_name} ${comment.user?.last_name}`}
            className="h-8 w-8 rounded-full hover:opacity-90 transition-opacity object-cover"
            crossOrigin="anonymous"
            onError={(e) => {
              console.error('Error loading comment profile picture:', e);
              const target = e.target as HTMLImageElement;
              target.onerror = null; // Prevent infinite loop
              target.src = '/images/female_avatar.jpg';
            }}
          />
        </Link>
      </div>
      <div className="flex-grow">
        <div className="bg-gray-100 rounded-lg px-3 py-2 relative group">
          {/* Comment author and options */}
          <div className="flex justify-between items-start">
            <div className="font-medium text-gray-900">
              <Link href={`/profile/${comment.user?.username}`} className="hover:underline">
                {comment.user?.first_name} {comment.user?.last_name}
              </Link>
            </div>

            {/* Comment options (only visible for own comments) */}
            {session?.user?.id === comment.user_id && (
              <div className="relative" ref={optionsRef}>
                <button
                  className="text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={toggleOptions}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>

                {/* Dropdown menu */}
                {showOptions && (
                  <div className="absolute right-0 mt-1 w-32 bg-white rounded-md shadow-lg z-10 py-1">
                    <button
                      onClick={handleEdit}
                      className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <PencilIcon className="h-4 w-4 mr-2" />
                      Edit
                    </button>
                    <button
                      onClick={handleDelete}
                      className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <TrashIcon className="h-4 w-4 mr-2" />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Comment content */}
          <div className="mt-1">
            {isEditing ? (
              <CommentForm
                postId={postId}
                onSubmit={handleEditSubmit}
                onCancel={() => setIsEditing(false)}
                initialContent={comment.content}
                initialImage={comment.image_url}
                isEditing
              />
            ) : (
              renderContent()
            )}
          </div>

          {/* Comment image */}
          {comment.image_url && (
            <div className="mt-2">
              <Image
                src={comment.image_url}
                alt="Comment image"
                width={200}
                height={200}
                className="rounded-lg max-h-60 object-contain"
              />
            </div>
          )}
        </div>

        {/* Comment actions */}
        <div className="flex items-center mt-1 text-xs text-gray-500 space-x-3">
          <button
            onClick={handleLike}
            className={`flex items-center space-x-1 ${
              comment.liked_by_user ? 'text-blue-600 font-medium' : 'hover:text-gray-700'
            }`}
          >
            {comment.liked_by_user ? (
              <HeartIconSolid className="h-4 w-4" />
            ) : (
              <HeartIcon className="h-4 w-4" />
            )}
            <span>{comment.likes_count || 0} {comment.likes_count === 1 ? 'like' : 'likes'}</span>
          </button>

          <button
            onClick={handleReplyClick}
            className="flex items-center space-x-1 hover:text-gray-700"
          >
            <ChatBubbleLeftIcon className="h-4 w-4" />
            <span>Reply</span>
          </button>

          <span className="text-gray-400">{formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}</span>
        </div>

        {(comment.replies_count || 0) > 0 && !isReply && (
          <button
            onClick={loadReplies}
            className="text-xs text-blue-600 mt-1 flex items-center"
          >
            {loadingReplies ? (
              <span>Loading replies...</span>
            ) : (
              <span>
                {showReplies ? 'Hide' : 'View'} {comment.replies_count} {comment.replies_count === 1 ? 'reply' : 'replies'}
              </span>
            )}
          </button>
        )}

        {showReplyForm && (
          <div className="mt-2">
            <CommentForm
              postId={postId}
              parentId={comment.id}
              onSubmit={handleReplySubmit}
              onCancel={() => setShowReplyForm(false)}
              placeholder={`Reply to ${comment.user?.first_name}...`}
              isReply
            />
          </div>
        )}

        {showReplies && replies.length > 0 && (
          <div className="mt-2">
            {replies.map(reply => (
              <CommentItem
                key={reply.id}
                comment={reply}
                postId={postId}
                onLike={onLike}
                isReply
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
