'use client';

import { useState, useEffect } from 'react';
import { Comment } from '@/types';
import CommentItem from './CommentItem';
import CommentForm from './CommentForm';

interface CommentListProps {
  postId: string;
}

export default function CommentList({ postId }: CommentListProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (postId) {
      fetchComments();
    }
  }, [postId]);

  const fetchComments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`/api/posts/${postId}/comments`);

      if (!response.ok) {
        throw new Error('Failed to fetch comments');
      }

      const data = await response.json();
      setComments(data.comments || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
      setError('Failed to load comments');
    } finally {
      setLoading(false);
    }
  };

  const handleNewComment = (comment: Comment) => {
    setComments(prevComments => [comment, ...prevComments]);
  };

  const handleReply = (parentId: string, newReply: Comment) => {
    setComments(prevComments =>
      prevComments.map(comment => {
        if (comment.id === parentId) {
          return {
            ...comment,
            replies_count: (comment.replies_count || 0) + 1
          };
        }
        return comment;
      })
    );
  };

  const handleEdit = (commentId: string, updatedComment: Comment) => {
    // Update the comment in the comments list
    setComments(prevComments =>
      prevComments.map(comment =>
        comment.id === commentId ? { ...comment, ...updatedComment } : comment
      )
    );
  };

  const handleDelete = (commentId: string) => {
    // Remove the comment from the comments list
    setComments(prevComments =>
      prevComments.filter(comment => comment.id !== commentId)
    );
  };

  const handleLike = async (commentId: string) => {
    try {
      // Optimistically update UI
      setComments(prevComments =>
        prevComments.map(comment => {
          if (comment.id === commentId) {
            const isLiked = comment.liked_by_user;
            return {
              ...comment,
              likes_count: isLiked ? (comment.likes_count || 1) - 1 : (comment.likes_count || 0) + 1,
              liked_by_user: !isLiked
            };
          }
          return comment;
        })
      );

      // Send request to server
      const response = await fetch(`/api/comments/${commentId}/like`, {
        method: 'POST',
        credentials: 'include'
      });

      if (!response.ok) {
        throw new Error('Failed to like comment');
      }
    } catch (error) {
      console.error('Error liking comment:', error);
      // Revert optimistic update if there was an error
      fetchComments();
    }
  };

  if (loading) {
    return (
      <div className="mt-4 space-y-2">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex animate-pulse">
            <div className="h-8 w-8 bg-gray-200 rounded-full mr-3"></div>
            <div className="flex-grow">
              <div className="h-20 bg-gray-100 rounded-lg"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return <div className="mt-4 text-red-500">{error}</div>;
  }

  return (
    <div className="mt-4">
      <h3 className="font-medium text-gray-900 mb-4">
        {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
      </h3>

      <CommentForm postId={postId} onSubmit={handleNewComment} />

      <div className="mt-4 space-y-4">
        {comments.map(comment => (
          <CommentItem
            key={comment.id}
            comment={comment}
            postId={postId}
            onLike={handleLike}
            onReply={handleReply}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}

        {comments.length === 0 && (
          <div className="text-gray-500 text-center py-4">
            No comments yet. Be the first to comment!
          </div>
        )}
      </div>
    </div>
  );
}
