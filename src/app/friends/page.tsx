'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { UserPlusIcon, UserMinusIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import PageTemplate from '@/components/common/PageTemplate';
import { Friendship } from '@/types';

export default function FriendsPage() {
  const { data: session, status } = useSession();
  const [friendRequests, setFriendRequests] = useState<Friendship[]>([]);
  const [friends, setFriends] = useState<any[]>([]);
  const [suggestedFriends, setSuggestedFriends] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const fetchData = async () => {
      if (status !== 'authenticated') {
        setLoading(false);
        return;
      }

      try {
        // Fetch friend requests
        const requestsResponse = await fetch('/api/friends/requests');
        if (requestsResponse.ok) {
          const data = await requestsResponse.json();
          setFriendRequests(data.friendRequests);
        }

        // Fetch friends
        const friendsResponse = await fetch('/api/friends');
        if (friendsResponse.ok) {
          const data = await friendsResponse.json();
          setFriends(data.friends);
        }

        // Fetch suggested friends
        const suggestionsResponse = await fetch('/api/friends/suggestions');
        if (suggestionsResponse.ok) {
          const data = await suggestionsResponse.json();
          setSuggestedFriends(data.suggestions);
        }
      } catch (error) {
        console.error('Error fetching friend data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [status]);

  const handleAcceptRequest = async (requestId: string) => {
    try {
      const response = await fetch(`/api/friends/requests/${requestId}/accept`, {
        method: 'POST',
      });

      if (response.ok) {
        // Remove the request from the list
        setFriendRequests(prev => prev.filter(req => req.id !== requestId));
        // Refresh friends list
        const friendsResponse = await fetch('/api/friends');
        if (friendsResponse.ok) {
          const data = await friendsResponse.json();
          setFriends(data.friends);
        }
      }
    } catch (error) {
      console.error('Error accepting friend request:', error);
    }
  };

  const handleRejectRequest = async (requestId: string) => {
    try {
      const response = await fetch(`/api/friends/requests/${requestId}/reject`, {
        method: 'POST',
      });

      if (response.ok) {
        // Remove the request from the list
        setFriendRequests(prev => prev.filter(req => req.id !== requestId));
      }
    } catch (error) {
      console.error('Error rejecting friend request:', error);
    }
  };

  const handleAddFriend = async (userId: string) => {
    try {
      const response = await fetch('/api/friends/requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ addresseeId: userId }),
      });

      if (response.ok) {
        // Remove from suggestions
        setSuggestedFriends(prev => prev.filter(user => user.id !== userId));
      }
    } catch (error) {
      console.error('Error sending friend request:', error);
    }
  };

  const handleRemoveFriend = async (friendshipId: string) => {
    try {
      const response = await fetch(`/api/friends/${friendshipId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove from friends list
        setFriends(prev => prev.filter(friendship => friendship.id !== friendshipId));
      }
    } catch (error) {
      console.error('Error removing friend:', error);
    }
  };

  const renderTabContent = () => {
    if (loading) {
      return (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="flex items-center space-x-3">
              <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
              <div className="h-8 bg-gray-300 rounded w-24"></div>
            </div>
          ))}
        </div>
      );
    }

    switch (activeTab) {
      case 'requests':
        return (
          <div className="space-y-4">
            {friendRequests.length > 0 ? (
              friendRequests.map(request => (
                <div key={request.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <img
                      src={request.user?.profile_picture || '/images/female_avatar.jpg'}
                      alt={`${request.user?.first_name} ${request.user?.last_name}`}
                      className="h-12 w-12 rounded-full object-cover"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/images/female_avatar.jpg';
                      }}
                    />
                    <div>
                      <Link href={`/profile/${request.user?.username}`} className="font-medium text-gray-900 hover:underline">
                        {request.user?.first_name} {request.user?.last_name}
                      </Link>
                      <p className="text-sm text-gray-500">Sent you a friend request</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleAcceptRequest(request.id)}
                      className="px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleRejectRequest(request.id)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-md hover:bg-gray-300"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No friend requests at the moment.</p>
              </div>
            )}
          </div>
        );
      case 'suggestions':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestedFriends.length > 0 ? (
              suggestedFriends.map(user => (
                <div key={user.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={user.profile_picture || '/images/female_avatar.jpg'}
                      alt={`${user.first_name} ${user.last_name}`}
                      className="h-24 w-24 rounded-full object-cover mb-3"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/images/female_avatar.jpg';
                      }}
                    />
                    <Link href={`/profile/${user.username}`} className="font-medium text-gray-900 hover:underline">
                      {user.first_name} {user.last_name}
                    </Link>
                    <button
                      onClick={() => handleAddFriend(user.id)}
                      className="mt-3 flex items-center justify-center space-x-1 w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                    >
                      <UserPlusIcon className="h-4 w-4" />
                      <span>Add Friend</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No suggestions available right now.</p>
              </div>
            )}
          </div>
        );
      case 'all':
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {friends.length > 0 ? (
              friends.map(friendship => (
                <div key={friendship.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={friendship.user?.profile_picture || '/images/female_avatar.jpg'}
                      alt={`${friendship.user?.first_name} ${friendship.user?.last_name}`}
                      className="h-24 w-24 rounded-full object-cover mb-3"
                      crossOrigin="anonymous"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = '/images/female_avatar.jpg';
                      }}
                    />
                    <Link href={`/profile/${friendship.user?.username}`} className="font-medium text-gray-900 hover:underline">
                      {friendship.user?.first_name} {friendship.user?.last_name}
                    </Link>
                    <button
                      onClick={() => handleRemoveFriend(friendship.id)}
                      className="mt-3 flex items-center justify-center space-x-1 w-full px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-md hover:bg-gray-300"
                    >
                      <UserMinusIcon className="h-4 w-4" />
                      <span>Unfriend</span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">You don't have any friends yet. Try adding some!</p>
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <PageTemplate 
      title="Friends" 
      description="Connect with friends, manage friend requests, and discover new people."
    >
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'all'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            All Friends ({friends.length})
          </button>
          <button
            onClick={() => setActiveTab('requests')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'requests'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Friend Requests ({friendRequests.length})
          </button>
          <button
            onClick={() => setActiveTab('suggestions')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'suggestions'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Suggestions
          </button>
        </nav>
      </div>

      {renderTabContent()}
    </PageTemplate>
  );
}
