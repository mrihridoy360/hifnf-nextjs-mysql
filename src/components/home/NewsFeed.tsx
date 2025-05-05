'use client';

import { useState, useEffect, useRef } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  HeartIcon,
  ChatBubbleLeftIcon,
  ShareIcon,
  EllipsisHorizontalIcon,
  HandThumbUpIcon,
  HandThumbDownIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline';
import {
  HeartIcon as HeartIconSolid,
  HandThumbUpIcon as HandThumbUpIconSolid,
  HandThumbDownIcon as HandThumbDownIconSolid
} from '@heroicons/react/24/solid';
import { formatDistanceToNow } from 'date-fns';
import { Post } from '@/types';
import PostItem from '@/components/posts/PostItem';

export default function NewsFeed() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const fetchPosts = async () => {
    try {
      setLoading(true);
      // Add a timestamp to prevent caching
      const timestamp = new Date().getTime();
      const response = await fetch(`/api/posts?t=${timestamp}`);
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      console.log('Fetched posts data:', data.posts);

      // Process posts to ensure user data is correctly structured
      const processedPosts = data.posts.map((post: any) => {
        console.log('Processing post:', post);

        // Create a proper user object if it doesn't exist
        if (!post.user) {
          post.user = {
            username: post.username,
            first_name: post.first_name,
            last_name: post.last_name,
            profile_picture: post.profile_picture
          };
        }

        // Make sure user_id is set correctly
        if (post.author_id && !post.user_id) {
          post.user_id = post.author_id;
          console.log('Fixed user_id using author_id for post:', post.id);
        }

        return post;
      });

      setPosts(processedPosts);
    } catch (err) {
      setError('Failed to load posts. Please try again later.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch posts on initial load
  useEffect(() => {
    fetchPosts();
  }, []);

  // Polling mechanism removed as it was causing unwanted refreshes
  // Users can manually refresh the page if they want to see new posts

  // Listen for new post created event
  useEffect(() => {
    const handleNewPost = (event: any) => {
      const { post } = event.detail;
      if (post) {
        // Add the new post to the beginning of the posts array
        // Only if it's not already in the array
        setPosts(prevPosts => {
          // Check if post already exists
          const exists = prevPosts.some(p => p.id === post.id);
          if (exists) {
            return prevPosts;
          }
          return [post, ...prevPosts];
        });
      }
      // Removed the else block that was refreshing the entire feed
    };

    // Add event listener
    window.addEventListener('new-post-created', handleNewPost);

    // Clean up
    return () => {
      window.removeEventListener('new-post-created', handleNewPost);
    };
  }, []);

  const handleReaction = async (postId: string, reactionType: 'like' | 'dislike') => {
    if (status !== 'authenticated') {
      alert('Please log in to like or dislike posts');
      return;
    }

    try {
      // Get the post
      const post = posts.find(p => p.id === postId);
      if (!post) return;

      // Determine the current state
      const isLiked = post.liked_by_user;
      const isDisliked = post.disliked_by_user;
      const currentReaction = post.user_reaction;

      // Optimistically update UI based on the current state and requested reaction
      setPosts(prevPosts =>
        prevPosts.map(p => {
          if (p.id === postId) {
            let newLikesCount = p.likes_count || 0;
            let newDislikesCount = p.dislikes_count || 0;
            let newLikedByUser = p.liked_by_user;
            let newDislikedByUser = p.disliked_by_user;
            let newUserReaction = p.user_reaction;

            // Handle like reaction
            if (reactionType === 'like') {
              if (currentReaction === 'like') {
                // Toggle off like
                newLikesCount -= 1;
                newLikedByUser = false;
                newUserReaction = null;
              } else if (currentReaction === 'dislike') {
                // Switch from dislike to like
                newLikesCount += 1;
                newDislikesCount -= 1;
                newLikedByUser = true;
                newDislikedByUser = false;
                newUserReaction = 'like';
              } else {
                // New like
                newLikesCount += 1;
                newLikedByUser = true;
                newUserReaction = 'like';
              }
            }
            // Handle dislike reaction
            else if (reactionType === 'dislike') {
              if (currentReaction === 'dislike') {
                // Toggle off dislike
                newDislikesCount -= 1;
                newDislikedByUser = false;
                newUserReaction = null;
              } else if (currentReaction === 'like') {
                // Switch from like to dislike
                newLikesCount -= 1;
                newDislikesCount += 1;
                newLikedByUser = false;
                newDislikedByUser = true;
                newUserReaction = 'dislike';
              } else {
                // New dislike
                newDislikesCount += 1;
                newDislikedByUser = true;
                newUserReaction = 'dislike';
              }
            }

            return {
              ...p,
              likes_count: newLikesCount,
              dislikes_count: newDislikesCount,
              liked_by_user: newLikedByUser,
              disliked_by_user: newDislikedByUser,
              user_reaction: newUserReaction
            };
          }
          return p;
        })
      );

      // Send request to server
      let endpoint = `/api/posts/${postId}/like`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reaction_type: reactionType }),
        credentials: 'include' // Include cookies for authentication
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Server error:', errorData);
        throw new Error(`Failed to ${reactionType} post: ${errorData.message || response.statusText}`);
      }

      // Get the updated post data from the response
      const data = await response.json();

      // Update only the specific post with server data instead of refreshing the entire feed
      if (data.post) {
        setPosts(prevPosts =>
          prevPosts.map(p => p.id === postId ? { ...p, ...data.post } : p)
        );
      }

    } catch (error) {
      console.error(`Error ${reactionType}ing post:`, error);
      // Revert optimistic update for only the affected post
      try {
        const response = await fetch(`/api/posts/${postId}`);
        if (response.ok) {
          const data = await response.json();
          // Update only this specific post
          setPosts(prevPosts =>
            prevPosts.map(p => p.id === postId ? data.post : p)
          );
        }
      } catch (fetchError) {
        console.error('Error fetching post data:', fetchError);
      }
    }
  };

  const handleLike = (postId: string) => handleReaction(postId, 'like');
  const handleDislike = (postId: string) => handleReaction(postId, 'dislike');

  // Handle click outside to close menu
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (activeMenu && menuRefs.current[activeMenu] &&
          !menuRefs.current[activeMenu]?.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMenu]);

  const toggleMenu = (postId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Stop event propagation
    console.log('Toggle menu for post:', postId, 'Current active menu:', activeMenu);
    setActiveMenu(activeMenu === postId ? null : postId);
  };

  // This function is no longer needed as editing is now handled directly in PostItem component
  // Keeping it for reference
  /*
  const handleEdit = (postId: string) => {
    // Check if user is authorized to edit
    const post = posts.find(p => p.id === postId);
    if (!post || session?.user?.id !== post.user_id) {
      alert('You can only edit your own posts');
      return;
    }

    // Navigate to edit page
    router.push(`/posts/${postId}/edit`);
    setActiveMenu(null);
  };
  */

  const handleDelete = async (postId: string) => {
    // Check if user is authorized to delete
    const post = posts.find(p => p.id === postId);
    if (!post || session?.user?.id !== post.user_id) {
      alert('You can only delete your own posts');
      return;
    }

    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      setIsDeleting(true);
      try {
        const response = await fetch(`/api/posts/${postId}`, {
          method: 'DELETE',
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Failed to delete post');
        }

        // Remove the post from the state
        setPosts(prevPosts => prevPosts.filter(p => p.id !== postId));
        setActiveMenu(null);
      } catch (error) {
        console.error('Error deleting post:', error);
        alert('Failed to delete post. Please try again.');
      } finally {
        setIsDeleting(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white rounded-lg shadow p-4 animate-pulse">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-1/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/6"></div>
              </div>
            </div>
            <div className="h-4 bg-gray-300 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="h-40 bg-gray-300 rounded w-full mb-4"></div>
            <div className="flex justify-between">
              <div className="h-6 bg-gray-300 rounded w-1/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/4"></div>
              <div className="h-6 bg-gray-300 rounded w-1/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
        <div className="flex">
          <div className="ml-3">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-6 text-center">
        <h3 className="text-lg font-medium text-gray-900 mb-2">No posts yet</h3>
        <p className="text-gray-600">
          {status === 'authenticated'
            ? 'Be the first to share something with your friends!'
            : 'Sign in to see posts from your friends.'}
        </p>
      </div>
    );
  }

  // Handle post deletion from PostItem
  const handlePostDelete = (postId: string) => {
    console.log('Post deleted in NewsFeed:', postId);
    // Remove the post from the state
    setPosts(prevPosts => prevPosts.filter(p => p.id !== postId));
  };

  // Handle post update from PostItem
  const handlePostUpdate = (updatedPost: Post) => {
    console.log('Post updated in NewsFeed:', updatedPost);
    // Update the post in the state
    setPosts(prevPosts => prevPosts.map(p => p.id === updatedPost.id ? {
      ...updatedPost,
      // Ensure user data is preserved
      user: p.user || {
        username: updatedPost.username as string,
        first_name: updatedPost.first_name as string,
        last_name: updatedPost.last_name as string,
        profile_picture: updatedPost.profile_picture as string
      }
    } : p));
  };

  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <PostItem
          key={post.id}
          post={post}
          onDelete={handlePostDelete}
          onUpdate={handlePostUpdate}
        />
      ))}
    </div>
  );
}
