'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter, useParams } from 'next/navigation';
import { Post } from '@/types';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  ArrowLeftIcon,
  HandThumbUpIcon,
  HandThumbDownIcon
} from '@heroicons/react/24/outline';
import {
  HeartIcon as HeartIconSolid,
  HandThumbUpIcon as HandThumbUpIconSolid,
  HandThumbDownIcon as HandThumbDownIconSolid
} from '@heroicons/react/24/solid';
import CommentList from '@/components/comments/CommentList';

export default function PostPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useParams();
  const postId = params.id as string;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/posts/${postId}`);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Post not found');
          }
          throw new Error('Failed to fetch post');
        }

        const data = await response.json();

        // Process post to ensure user data is correctly structured
        const processedPost = { ...data.post };
        if (!processedPost.user) {
          processedPost.user = {
            username: data.post.username,
            first_name: data.post.first_name,
            last_name: data.post.last_name,
            profile_picture: data.post.profile_picture
          };
        }

        setPost(processedPost);
      } catch (error) {
        console.error('Error fetching post:', error);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    if (postId) {
      fetchPost();
    }
  }, [postId]);

  const handleReaction = async (reactionType: 'like' | 'dislike') => {
    if (status !== 'authenticated' || !post) {
      return;
    }

    try {
      // Optimistically update UI
      setPost(prevPost => {
        if (!prevPost) return null;

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
      const response = await fetch(`/api/posts/${postId}/like`, {
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
    } catch (error) {
      console.error(`Error ${reactionType}ing post:`, error);
      // Revert optimistic update if there was an error
      const response = await fetch(`/api/posts/${postId}`);
      if (response.ok) {
        const data = await response.json();
        setPost(data.post);
      }
    }
  };

  const handleLike = () => handleReaction('like');
  const handleDislike = () => handleReaction('dislike');

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded mb-4"></div>
          <div className="h-40 bg-gray-200 rounded mb-4"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error || 'Post not found'}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={() => router.push('/')}
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-1" />
            Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="mb-4">
        <button
          onClick={() => router.push('/')}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-1" />
          Back to home
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {/* Debug profile picture URL */}
              {console.log('Post detail page profile picture:', post.user?.profile_picture)}
              <img
                src={post.user?.profile_picture || '/images/female_avatar.jpg'}
                alt={`${post.user?.first_name} ${post.user?.last_name}`}
                className="h-10 w-10 rounded-full object-cover"
                crossOrigin="anonymous"
                onError={(e) => {
                  console.error('Error loading profile picture:', e);
                  const target = e.target as HTMLImageElement;
                  target.onerror = null; // Prevent infinite loop
                  target.src = '/images/female_avatar.jpg';
                }}
              />
              <div>
                <Link href={`/profile/${post.user?.username}`} className="font-medium text-gray-900 hover:underline">
                  {post.user?.first_name} {post.user?.last_name}
                </Link>
                {post.feeling && (
                  <p className="text-sm text-gray-700">
                    is feeling {post.feeling_emoji} {post.feeling}
                  </p>
                )}
                <p className="text-xs text-gray-500">
                  {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })}
                  {post.privacy !== 'public' && (
                    <span className="ml-2">
                      • {post.privacy === 'friends' ? 'Friends' : 'Only me'}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {post.content && (
            <p className="text-gray-800 mb-4">{post.content}</p>
          )}

          {post.image_url && (
            <div className="mb-4">
              <img
                src={post.image_url}
                alt="Post image"
                className="rounded-lg w-full object-cover max-h-[500px]"
                loading="lazy"
              />
            </div>
          )}

          {post.video_url && (
            <div className="mb-4">
              <video
                src={post.video_url}
                controls
                preload="metadata"
                className="rounded-lg w-full max-h-[500px]"
                poster={`${post.video_url}?poster=true`}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          )}

          <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
            <div className="flex items-center space-x-2">
              {(post.likes_count || 0) > 0 && (
                <div className="flex items-center">
                  <HandThumbUpIconSolid className="h-4 w-4 text-blue-500 mr-1" />
                  <span>{post.likes_count}</span>
                </div>
              )}
              {(post.dislikes_count || 0) > 0 && (
                <div className="flex items-center">
                  <HandThumbDownIconSolid className="h-4 w-4 text-red-500 mr-1" />
                  <span>{post.dislikes_count}</span>
                </div>
              )}
            </div>
            <div>
              {(post.comments_count || 0) > 0 && (
                <span>{post.comments_count} {post.comments_count === 1 ? 'comment' : 'comments'}</span>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 px-4 py-2">
          <div className="flex justify-between">
            <div className="flex items-center">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1 mr-2 ${
                  post.user_reaction === 'like' ? 'text-blue-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {post.user_reaction === 'like' ? (
                  <HandThumbUpIconSolid className="h-5 w-5" />
                ) : (
                  <HandThumbUpIcon className="h-5 w-5" />
                )}
                <span>Like</span>
              </button>

              <button
                onClick={handleDislike}
                className={`flex items-center space-x-1 ${
                  post.user_reaction === 'dislike' ? 'text-red-600' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {post.user_reaction === 'dislike' ? (
                  <HandThumbDownIconSolid className="h-5 w-5" />
                ) : (
                  <HandThumbDownIcon className="h-5 w-5" />
                )}
                <span>Dislike</span>
              </button>
            </div>

            <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-700">
              <ShareIcon className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
        </div>

        <div className="border-t border-gray-200 p-4">
          <CommentList postId={post.id} />
        </div>
      </div>
    </div>
  );
}
