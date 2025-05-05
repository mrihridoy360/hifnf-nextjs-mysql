'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { BookmarkIcon, TrashIcon } from '@heroicons/react/24/outline';
import PageTemplate from '@/components/common/PageTemplate';
import { formatDistanceToNow } from 'date-fns';

interface SavedItem {
  id: string;
  user_id: string;
  post_id: string;
  created_at: string;
  post: {
    id: string;
    content: string;
    image_url: string | null;
    video_url: string | null;
    created_at: string;
    user: {
      username: string;
      first_name: string;
      last_name: string;
      profile_picture: string | null;
    };
  };
}

export default function SavedPage() {
  const { data: session, status } = useSession();
  const [savedItems, setSavedItems] = useState<SavedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const fetchSavedItems = async () => {
      if (status !== 'authenticated') {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/saved');
        if (response.ok) {
          const data = await response.json();
          setSavedItems(data.savedItems || []);
        }
      } catch (error) {
        console.error('Error fetching saved items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedItems();
  }, [status]);

  const handleRemoveSaved = async (savedId: string) => {
    try {
      const response = await fetch(`/api/saved/${savedId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setSavedItems(prev => prev.filter(item => item.id !== savedId));
      }
    } catch (error) {
      console.error('Error removing saved item:', error);
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-lg shadow p-4">
              <div className="flex items-center space-x-3 mb-3">
                <div className="h-10 w-10 bg-gray-300 rounded-full"></div>
                <div className="flex-1">
                  <div className="h-4 bg-gray-300 rounded w-1/3 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                </div>
              </div>
              <div className="h-4 bg-gray-300 rounded w-full mb-3"></div>
              <div className="h-4 bg-gray-300 rounded w-2/3"></div>
              <div className="h-48 bg-gray-300 rounded mt-3"></div>
            </div>
          ))}
        </div>
      );
    }

    if (savedItems.length === 0) {
      return (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <BookmarkIcon className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No saved items</h3>
          <p className="text-gray-500">Items you save will appear here.</p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {savedItems.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <img
                    src={item.post.user.profile_picture || '/images/female_avatar.jpg'}
                    alt={`${item.post.user.first_name} ${item.post.user.last_name}`}
                    className="h-10 w-10 rounded-full object-cover"
                    crossOrigin="anonymous"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = '/images/female_avatar.jpg';
                    }}
                  />
                  <div>
                    <Link href={`/profile/${item.post.user.username}`} className="font-medium text-gray-900 hover:underline">
                      {item.post.user.first_name} {item.post.user.last_name}
                    </Link>
                    <p className="text-xs text-gray-500">
                      {formatDistanceToNow(new Date(item.post.created_at), { addSuffix: true })}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveSaved(item.id)}
                  className="text-gray-400 hover:text-gray-600"
                  title="Remove from saved"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
              </div>
              
              <p className="text-gray-800 mb-3">{item.post.content}</p>
              
              {item.post.image_url && (
                <img
                  src={item.post.image_url}
                  alt="Post image"
                  className="w-full h-auto rounded-lg"
                />
              )}
              
              {item.post.video_url && (
                <video
                  src={item.post.video_url}
                  controls
                  className="w-full h-auto rounded-lg"
                  poster={`${item.post.video_url}?poster=true`}
                >
                  Your browser does not support the video tag.
                </video>
              )}
              
              <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between text-sm text-gray-500">
                <span>Saved {formatDistanceToNow(new Date(item.created_at), { addSuffix: true })}</span>
                <Link href={`/posts/${item.post.id}`} className="text-blue-600 hover:underline">
                  View Post
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <PageTemplate 
      title="Saved Items" 
      description="View and manage posts you've saved for later."
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
            All Items
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'posts'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Posts
          </button>
          <button
            onClick={() => setActiveTab('photos')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'photos'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Photos & Videos
          </button>
        </nav>
      </div>

      {renderContent()}
    </PageTemplate>
  );
}
