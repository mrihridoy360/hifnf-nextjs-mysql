'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useParams, useRouter } from 'next/navigation';
import { UserProfile, Post } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import {
  PencilIcon,
  MapPinIcon,
  GlobeAltIcon,
  CalendarIcon,
  UserPlusIcon,
  UserMinusIcon,
  CheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import CreatePostForm from '@/components/home/CreatePostForm';
import LeftSidebar from '@/components/home/LeftSidebar';
import PostItem from '@/components/posts/PostItem';
import ProfileSkeleton from '@/components/profile/ProfileSkeleton';
import EditProfileModal from '@/components/profile/EditProfileModal';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const params = useParams();
  const router = useRouter();
  const username = params.username as string;

  const [user, setUser] = useState<UserProfile | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [refreshPosts, setRefreshPosts] = useState(0);
  const [loading, setLoading] = useState(true);
  const [postsLoading, setPostsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFriend, setIsFriend] = useState(false);
  const [friendshipStatus, setFriendshipStatus] = useState<string | null>(null);
  const [isCurrentUser, setIsCurrentUser] = useState(false);
  const [postCount, setPostCount] = useState(0);
  const [friendCount, setFriendCount] = useState(0);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        setError(null); // Reset error state
        console.log('Fetching profile for username:', username);

        // Add a timestamp to prevent caching
        const timestamp = new Date().getTime();

        // Use the trimmed username to avoid space issues
        const trimmedUsername = username.trim();
        console.log('Using trimmed username for API call:', trimmedUsername);

        // Make API call with the trimmed username
        const response = await fetch(`/api/users/${trimmedUsername}?t=${timestamp}`);

        console.log('Profile API response status:', response.status);

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('User not found');
          } else if (response.status === 401) {
            throw new Error('You need to be logged in to view this profile');
          } else {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || 'Failed to fetch profile');
          }
        }

        const data = await response.json();
        console.log('Profile API response data:', data);

        if (!data.user) {
          throw new Error('Invalid profile data received');
        }

        setUser(data.user);
        setIsFriend(data.isFriend);
        setFriendshipStatus(data.friendshipStatus);
        setIsCurrentUser(data.isCurrentUser);
        setPostCount(data.postCount);
        setFriendCount(data.friendCount);
      } catch (error) {
        console.error('Error fetching profile:', error);
        setError(error instanceof Error ? error.message : 'Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchProfile();
    }
  }, [username]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setPostsLoading(true);
        console.log('Fetching posts for username:', username);

        // Add timestamp to prevent caching
        const timestamp = new Date().getTime();

        // Use the trimmed username to avoid space issues
        const trimmedUsername = username.trim();
        console.log('Using trimmed username for API call:', trimmedUsername);

        // Make API call with the trimmed username
        const response = await fetch(`/api/users/${trimmedUsername}/posts?t=${timestamp}`);

        console.log('Posts API response status:', response.status);

        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.status}`);
        }

        const data = await response.json();
        console.log('Fetched posts data:', data);
        setPosts(data.posts || []);
      } catch (error) {
        console.error('Error fetching posts:', error);
      } finally {
        setPostsLoading(false);
      }
    };

    if (username && !loading && user) {
      fetchPosts();
    }
  }, [username, loading, user, refreshPosts]);

  const handleFriendRequest = async () => {
    if (status !== 'authenticated') {
      router.push('/auth/login');
      return;
    }

    try {
      const response = await fetch('/api/friends/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ addresseeId: user?.id }),
      });

      if (response.ok) {
        setFriendshipStatus('pending');
      }
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };

  const handleCancelRequest = async () => {
    if (!user?.id) return;

    try {
      const response = await fetch(`/api/friends/requests/cancel`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ addresseeId: user.id }),
      });

      if (response.ok) {
        setFriendshipStatus(null);
      }
    } catch (error) {
      console.error('Error canceling friend request:', error);
    }
  };

  const handleUnfriend = async () => {
    if (!user?.id) return;

    try {
      const response = await fetch(`/api/friends/unfriend`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ friendId: user.id }),
      });

      if (response.ok) {
        setFriendshipStatus(null);
        setIsFriend(false);
      }
    } catch (error) {
      console.error('Error unfriending:', error);
    }
  };

  const handleProfileUpdate = (updatedUser: UserProfile) => {
    setUser(updatedUser);
    setShowEditModal(false);
  };

  if (loading) {
    return <ProfileSkeleton />;
  }

  if (error || !user) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
          <div className="flex">
            <div className="ml-3">
              <p className="text-sm text-red-700">{error || 'User not found'}</p>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Sidebar - Only visible on large screens */}
        <div className="hidden lg:block col-span-3">
          <LeftSidebar />
        </div>

        {/* Main Content */}
        <div className="col-span-1 lg:col-span-6">
          {/* Cover Photo */}
          <div className="relative h-64 bg-gray-200 rounded-b-lg overflow-hidden">
            {user.cover_photo ? (
              <img
                src={user.cover_photo}
                alt="Cover"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
                onError={(e) => {
                  console.error('Error loading cover photo:', e);
                  // Fallback to gradient on error
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.classList.add('bg-gradient-to-r', 'from-blue-400', 'to-purple-500');
                  }
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-500" />
            )}
          </div>

      {/* Profile Info */}
      <div className="relative px-4 sm:px-6 -mt-16">
        <div className="relative flex flex-col sm:flex-row items-center sm:items-end">
          {/* Profile Picture */}
          <div className="relative h-32 w-32 rounded-full border-4 border-white overflow-hidden bg-white">
            {user.profile_picture ? (
              <>
                {/* Debug profile picture URL in profile page */}
                {console.log('Profile page profile picture:', user.profile_picture)}
                <img
                  src={user.profile_picture}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    console.error('Error loading profile picture:', e);
                    // Fallback to initials on error
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.classList.add('bg-gray-300', 'flex', 'items-center', 'justify-center');
                      const span = document.createElement('span');
                      span.className = 'text-2xl font-bold text-gray-500';
                      span.textContent = `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`;
                      parent.appendChild(span);
                    }
                  }}
                />
              </>
            ) : (
              <div className="h-full w-full bg-gray-300 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-500">
                  {user.first_name.charAt(0)}{user.last_name.charAt(0)}
                </span>
              </div>
            )}
          </div>

          {/* Name and Bio */}
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left flex-grow">
            <h1 className="text-2xl font-bold text-gray-900">
              {user.first_name} {user.last_name}
            </h1>
            <p className="text-sm text-gray-500">@{user.username}</p>
            {user.bio && (
              <p className="mt-2 text-gray-700">{user.bio}</p>
            )}
          </div>

          {/* Action Buttons */}
          <div className="mt-4 sm:mt-0 flex space-x-2">
            {isCurrentUser ? (
              <button
                onClick={() => setShowEditModal(true)}
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <PencilIcon className="h-4 w-4 mr-2" />
                Edit Profile
              </button>
            ) : (
              <>
                {isFriend ? (
                  <button
                    onClick={handleUnfriend}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <UserMinusIcon className="h-4 w-4 mr-2" />
                    Unfriend
                  </button>
                ) : friendshipStatus === 'pending' ? (
                  <button
                    onClick={handleCancelRequest}
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <ClockIcon className="h-4 w-4 mr-2" />
                    Cancel Request
                  </button>
                ) : (
                  <button
                    onClick={handleFriendRequest}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    <UserPlusIcon className="h-4 w-4 mr-2" />
                    Add Friend
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* Stats and Info */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-medium text-gray-900 mb-4">About</h2>
            <div className="space-y-3">
              {user.location && (
                <div className="flex items-center text-gray-700">
                  <MapPinIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span>{user.location}</span>
                </div>
              )}
              {user.website && (
                <div className="flex items-center text-gray-700">
                  <GlobeAltIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <a href={user.website.startsWith('http') ? user.website : `https://${user.website}`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-blue-600 hover:underline">
                    {user.website}
                  </a>
                </div>
              )}
              {user.date_of_birth && (
                <div className="flex items-center text-gray-700">
                  <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                  <span>Birthday: {user.date_of_birth}</span>
                </div>
              )}
              <div className="flex items-center text-gray-700">
                <CalendarIcon className="h-5 w-5 text-gray-400 mr-2" />
                <span>Joined {new Date(user.created_at).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{postCount}</div>
                <div className="text-sm text-gray-500">Posts</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{friendCount}</div>
                <div className="text-sm text-gray-500">Friends</div>
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Posts</h2>

          {/* Create Post Form - Only show for current user */}
          {isCurrentUser && (
            <div className="mb-4">
              <CreatePostForm />
            </div>
          )}

          {postsLoading ? (
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white rounded-lg shadow p-4 animate-pulse">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                    <div className="flex-1">
                      <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-1/5"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-40 bg-gray-200 rounded-lg mt-4"></div>
                </div>
              ))}
            </div>
          ) : posts.length > 0 ? (
            <div className="space-y-4">
              {posts.map(post => (
                <PostItem
                  key={post.id}
                  post={post}
                  onDelete={(postId) => {
                    console.log('Post deleted in profile page:', postId);
                    setPosts(prevPosts => prevPosts.filter(p => p.id !== postId));
                  }}
                  onUpdate={(updatedPost) => {
                    // Update the post in the posts array
                    setPosts(prevPosts =>
                      prevPosts.map(p => p.id === updatedPost.id ? {
                        ...updatedPost,
                        // Ensure user data is preserved
                        user: p.user || {
                          username: updatedPost.username as string,
                          first_name: updatedPost.first_name as string,
                          last_name: updatedPost.last_name as string,
                          profile_picture: updatedPost.profile_picture as string
                        }
                      } : p)
                    );
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <p className="text-gray-500">No posts to show</p>
              {isCurrentUser && (
                <p className="mt-2 text-gray-500">Use the form above to create your first post</p>
              )}
            </div>
          )}
        </div>
      </div>
        </div>

        {/* Right Sidebar - Only visible on large screens */}
        <div className="hidden lg:block col-span-3">
          <div className="bg-white rounded-lg shadow p-4 sticky top-20">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Photos</h2>
            <div className="grid grid-cols-3 gap-2">
              {posts
                .filter(post => post.image_url)
                .slice(0, 9)
                .map((post, index) => (
                  <div key={index} className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={post.image_url || ''}
                      alt="Post"
                      className="w-full h-full object-cover"
                      crossOrigin="anonymous"
                    />
                  </div>
                ))}
              {posts.filter(post => post.image_url).length === 0 && (
                <div className="col-span-3 text-center py-4 text-gray-500">
                  No photos to show
                </div>
              )}
            </div>

            <div className="border-t border-gray-200 mt-4 pt-4">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Friends</h2>
              <div className="grid grid-cols-3 gap-2">
                {/* This is a placeholder for friends. In a real app, you would fetch and display friends here */}
                <div className="text-center py-4 text-gray-500 col-span-3">
                  {friendCount > 0 ? (
                    <Link href="/friends" className="text-blue-600 hover:underline">
                      View all {friendCount} friends
                    </Link>
                  ) : (
                    "No friends to show"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <EditProfileModal
          user={user}
          onClose={() => setShowEditModal(false)}
          onUpdate={handleProfileUpdate}
        />
      )}
    </div>
  );
}
