'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { VideoCameraIcon, PlayIcon } from '@heroicons/react/24/outline';
import PageTemplate from '@/components/common/PageTemplate';
import { formatDistanceToNow } from 'date-fns';

interface Video {
  id: string;
  post_id: string;
  video_url: string;
  created_at: string;
  post: {
    content: string;
    user: {
      username: string;
      first_name: string;
      last_name: string;
      profile_picture: string | null;
    };
  };
}

export default function VideosPage() {
  const { data: session, status } = useSession();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('your-videos');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      if (status !== 'authenticated') {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/videos');
        if (response.ok) {
          const data = await response.json();
          setVideos(data.videos || []);
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [status]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <div key={i} className="animate-pulse">
              <div className="aspect-video bg-gray-300 rounded mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      );
    }

    if (videos.length === 0) {
      return (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <VideoCameraIcon className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No videos found</h3>
          <p className="text-gray-500 mb-4">
            {activeTab === 'your-videos' 
              ? "You haven't uploaded any videos yet." 
              : "No videos from your friends."}
          </p>
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 inline-block"
          >
            Create Post with Video
          </Link>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videos.map(video => (
          <div key={video.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div 
              className="aspect-video relative group cursor-pointer bg-black"
              onClick={() => setSelectedVideo(video)}
            >
              <video
                src={video.video_url}
                className="w-full h-full object-contain"
                poster={`${video.video_url}?poster=true`}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-opacity">
                <div className="h-12 w-12 rounded-full bg-white bg-opacity-80 flex items-center justify-center">
                  <PlayIcon className="h-6 w-6 text-gray-800" />
                </div>
              </div>
            </div>
            
            <div className="p-3">
              <div className="flex items-center space-x-2 mb-2">
                <img
                  src={video.post.user.profile_picture || '/images/female_avatar.jpg'}
                  alt={`${video.post.user.first_name} ${video.post.user.last_name}`}
                  className="h-6 w-6 rounded-full object-cover"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/female_avatar.jpg';
                  }}
                />
                <Link href={`/profile/${video.post.user.username}`} className="text-sm font-medium text-gray-900 hover:underline">
                  {video.post.user.first_name} {video.post.user.last_name}
                </Link>
              </div>
              
              {video.post.content && (
                <p className="text-gray-800 text-sm line-clamp-2 mb-1">{video.post.content}</p>
              )}
              
              <p className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(video.created_at), { addSuffix: true })}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <PageTemplate 
      title="Videos" 
      description="Watch videos from you and your friends."
    >
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('your-videos')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'your-videos'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Your Videos
          </button>
          <button
            onClick={() => setActiveTab('friends')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'friends'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Friends' Videos
          </button>
          <button
            onClick={() => setActiveTab('watch')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'watch'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Watch
          </button>
        </nav>
      </div>

      {renderContent()}

      {/* Video Viewer Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="max-w-4xl w-full"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative bg-black rounded-t-lg overflow-hidden">
              <video
                src={selectedVideo.video_url}
                className="w-full h-auto max-h-[70vh]"
                controls
                autoPlay
              />
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 bg-white rounded-b-lg">
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src={selectedVideo.post.user.profile_picture || '/images/female_avatar.jpg'}
                  alt={`${selectedVideo.post.user.first_name} ${selectedVideo.post.user.last_name}`}
                  className="h-8 w-8 rounded-full object-cover"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/female_avatar.jpg';
                  }}
                />
                <div>
                  <Link href={`/profile/${selectedVideo.post.user.username}`} className="font-medium text-gray-900 hover:underline">
                    {selectedVideo.post.user.first_name} {selectedVideo.post.user.last_name}
                  </Link>
                  <p className="text-xs text-gray-500">
                    {formatDistanceToNow(new Date(selectedVideo.created_at), { addSuffix: true })}
                  </p>
                </div>
              </div>
              
              {selectedVideo.post.content && (
                <p className="text-gray-800 text-sm">{selectedVideo.post.content}</p>
              )}
              
              <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
                <Link href={`/posts/${selectedVideo.post_id}`} className="text-blue-600 hover:underline text-sm">
                  View Post
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageTemplate>
  );
}
