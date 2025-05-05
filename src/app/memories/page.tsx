'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { ClockIcon, ShareIcon } from '@heroicons/react/24/outline';
import PageTemplate from '@/components/common/PageTemplate';
import { formatDistanceToNow, format, subYears, isSameDay, isSameMonth } from 'date-fns';
import { Post } from '@/types';

interface Memory {
  post: Post;
  yearsAgo: number;
}

export default function MemoriesPage() {
  const { data: session, status } = useSession();
  const [memories, setMemories] = useState<Memory[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('on-this-day');

  useEffect(() => {
    const fetchMemories = async () => {
      if (status !== 'authenticated') {
        setLoading(false);
        return;
      }

      try {
        // Fetch user's posts
        const response = await fetch('/api/posts/user');
        if (response.ok) {
          const data = await response.json();
          const posts = data.posts || [];
          
          // Filter posts to find memories (posts from previous years on this day)
          const today = new Date();
          const memories = posts
            .filter((post: Post) => {
              const postDate = new Date(post.created_at);
              const yearDiff = today.getFullYear() - postDate.getFullYear();
              
              // Check if it's the same day and month, but different year
              return yearDiff > 0 && isSameDay(
                new Date(today.getFullYear(), today.getMonth(), today.getDate()),
                new Date(today.getFullYear(), postDate.getMonth(), postDate.getDate())
              );
            })
            .map((post: Post) => {
              const postDate = new Date(post.created_at);
              const yearsAgo = today.getFullYear() - postDate.getFullYear();
              return { post, yearsAgo };
            });
          
          setMemories(memories);
        }
      } catch (error) {
        console.error('Error fetching memories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMemories();
  }, [status]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="animate-pulse space-y-6">
          {[1, 2].map(i => (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b border-gray-100">
                <div className="h-6 bg-gray-300 rounded w-1/3 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
              </div>
              <div className="p-4">
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
            </div>
          ))}
        </div>
      );
    }

    if (memories.length === 0) {
      return (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <ClockIcon className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No memories for today</h3>
          <p className="text-gray-500">Check back tomorrow or explore your past posts.</p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        {memories.map(memory => (
          <div key={memory.post.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
              <h3 className="font-semibold text-blue-800">
                {memory.yearsAgo} {memory.yearsAgo === 1 ? 'year' : 'years'} ago
              </h3>
              <p className="text-sm text-blue-600">
                {format(new Date(memory.post.created_at), 'MMMM d, yyyy')}
              </p>
            </div>
            
            <div className="p-4">
              <div className="flex items-center space-x-3 mb-3">
                <img
                  src={memory.post.user?.profile_picture || '/images/female_avatar.jpg'}
                  alt={`${memory.post.user?.first_name} ${memory.post.user?.last_name}`}
                  className="h-10 w-10 rounded-full object-cover"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/female_avatar.jpg';
                  }}
                />
                <div>
                  <div className="font-medium text-gray-900">
                    {memory.post.user?.first_name} {memory.post.user?.last_name}
                  </div>
                  <p className="text-xs text-gray-500">
                    {formatDistanceToNow(new Date(memory.post.created_at), { addSuffix: true })}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-800 mb-3">{memory.post.content}</p>
              
              {memory.post.image_url && (
                <img
                  src={memory.post.image_url}
                  alt="Memory image"
                  className="w-full h-auto rounded-lg"
                />
              )}
              
              {memory.post.video_url && (
                <video
                  src={memory.post.video_url}
                  controls
                  className="w-full h-auto rounded-lg"
                  poster={`${memory.post.video_url}?poster=true`}
                >
                  Your browser does not support the video tag.
                </video>
              )}
              
              <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
                <Link href={`/posts/${memory.post.id}`} className="text-blue-600 hover:underline text-sm">
                  View Original Post
                </Link>
                <button className="flex items-center text-gray-600 hover:text-gray-800 text-sm">
                  <ShareIcon className="h-4 w-4 mr-1" />
                  Share Memory
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <PageTemplate 
      title="Memories" 
      description="Rediscover your past moments and memories from previous years."
    >
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('on-this-day')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'on-this-day'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            On This Day
          </button>
          <button
            onClick={() => setActiveTab('recent')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'recent'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Recent Memories
          </button>
        </nav>
      </div>

      {renderContent()}
    </PageTemplate>
  );
}
