'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/solid';

interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  profile_picture: string | null;
  reacted_at: string;
}

interface ReactionsListProps {
  postId: string;
  reactionType: 'like' | 'dislike';
  isOpen: boolean;
  onClose: () => void;
}

export default function ReactionsList({ postId, reactionType, isOpen, onClose }: ReactionsListProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const fetchReactions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(`/api/posts/${postId}/reactions?type=${reactionType}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch reactions');
        }
        
        const data = await response.json();
        setUsers(data.users || []);
      } catch (error) {
        console.error('Error fetching reactions:', error);
        setError('Failed to load reactions');
      } finally {
        setLoading(false);
      }
    };

    fetchReactions();
  }, [postId, reactionType, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
          onClick={onClose}
        />

        {/* Modal panel */}
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900 flex items-center">
                {reactionType === 'like' ? (
                  <>
                    <HandThumbUpIcon className="h-5 w-5 text-blue-500 mr-2" />
                    <span>People who liked this post</span>
                  </>
                ) : (
                  <>
                    <HandThumbDownIcon className="h-5 w-5 text-red-500 mr-2" />
                    <span>People who disliked this post</span>
                  </>
                )}
              </h3>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {loading ? (
              <div className="py-4 text-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
                <p className="mt-2 text-sm text-gray-500">Loading reactions...</p>
              </div>
            ) : error ? (
              <div className="py-4 text-center text-red-500">
                {error}
              </div>
            ) : users.length === 0 ? (
              <div className="py-4 text-center text-gray-500">
                No {reactionType}s yet
              </div>
            ) : (
              <ul className="divide-y divide-gray-200 max-h-80 overflow-y-auto">
                {users.map(user => (
                  <li key={user.id} className="py-3">
                    <Link href={`/profile/${user.username}`} className="flex items-center hover:bg-gray-50 p-2 rounded-lg">
                      <img 
                        src={user.profile_picture || '/images/male_avatar.jpg'} 
                        alt={`${user.first_name} ${user.last_name}`}
                        className="h-10 w-10 rounded-full object-cover"
                        crossOrigin="anonymous"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null; // Prevent infinite loop
                          target.src = '/images/male_avatar.jpg';
                        }}
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">
                          {user.first_name} {user.last_name}
                        </p>
                        <p className="text-xs text-gray-500">
                          @{user.username}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
