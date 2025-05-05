'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import { Friendship } from '@/types';

export default function RightSidebar() {
  const { data: session, status } = useSession();
  const [friendRequests, setFriendRequests] = useState<Friendship[]>([]);
  const [suggestedFriends, setSuggestedFriends] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

  if (status !== 'authenticated') {
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-bold text-gray-800 mb-4">Sign in to connect with friends</h2>
        <p className="text-gray-600 text-sm mb-4">
          Create an account or sign in to see friend suggestions, manage friend requests, and more.
        </p>
        <div className="flex space-x-2">
          <Link
            href="/auth/signin"
            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md text-center hover:bg-blue-700"
          >
            Sign In
          </Link>
          <Link
            href="/auth/register"
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-center hover:bg-gray-50"
          >
            Sign Up
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Friend Requests */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-bold text-gray-800 mb-4">Friend Requests</h2>
        
        {loading ? (
          <div className="animate-pulse space-y-3">
            {[1, 2].map(i => (
              <div key={i} className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="flex space-x-2">
                    <div className="h-6 bg-gray-300 rounded w-16"></div>
                    <div className="h-6 bg-gray-300 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : friendRequests.length > 0 ? (
          <div className="space-y-3">
            {friendRequests.map(request => (
              <div key={request.id} className="flex items-center space-x-3">
                <img
                  src={request.user?.profile_picture || 'https://via.placeholder.com/40'}
                  alt={`${request.user?.first_name} ${request.user?.last_name}`}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex-1">
                  <Link href={`/profile/${request.user?.username}`} className="font-medium text-gray-900 hover:underline">
                    {request.user?.first_name} {request.user?.last_name}
                  </Link>
                  <div className="flex space-x-2 mt-1">
                    <button
                      onClick={() => handleAcceptRequest(request.id)}
                      className="px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleRejectRequest(request.id)}
                      className="px-3 py-1 bg-gray-200 text-gray-800 text-xs rounded hover:bg-gray-300"
                    >
                      Decline
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No friend requests at the moment.</p>
        )}
      </div>
      
      {/* Suggested Friends */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-bold text-gray-800 mb-4">People You May Know</h2>
        
        {loading ? (
          <div className="animate-pulse space-y-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="flex items-center space-x-3">
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-6 bg-gray-300 rounded w-24"></div>
                </div>
              </div>
            ))}
          </div>
        ) : suggestedFriends.length > 0 ? (
          <div className="space-y-3">
            {suggestedFriends.map(user => (
              <div key={user.id} className="flex items-center space-x-3">
                <img
                  src={user.profile_picture || 'https://via.placeholder.com/40'}
                  alt={`${user.first_name} ${user.last_name}`}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex-1">
                  <Link href={`/profile/${user.username}`} className="font-medium text-gray-900 hover:underline">
                    {user.first_name} {user.last_name}
                  </Link>
                  <button
                    onClick={() => handleAddFriend(user.id)}
                    className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 mt-1"
                  >
                    <UserPlusIcon className="h-4 w-4" />
                    <span className="text-xs">Add Friend</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-sm">No suggestions available right now.</p>
        )}
      </div>
      
      {/* Birthdays */}
      <div className="bg-white rounded-lg shadow p-4">
        <h2 className="font-bold text-gray-800 mb-2">Birthdays</h2>
        <p className="text-gray-500 text-sm">No birthdays today.</p>
      </div>
      
      {/* Contacts */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="font-bold text-gray-800">Contacts</h2>
          <div className="flex space-x-2">
            <button className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <p className="text-gray-500 text-sm">No contacts online.</p>
      </div>
    </div>
  );
}
