'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { PhotoIcon, ArrowsPointingOutIcon } from '@heroicons/react/24/outline';
import PageTemplate from '@/components/common/PageTemplate';
import { formatDistanceToNow } from 'date-fns';

interface Photo {
  id: string;
  post_id: string;
  image_url: string;
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

export default function PhotosPage() {
  const { data: session, status } = useSession();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('your-photos');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      if (status !== 'authenticated') {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/photos');
        if (response.ok) {
          const data = await response.json();
          setPhotos(data.photos || []);
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, [status]);

  const renderContent = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="aspect-square bg-gray-300 rounded animate-pulse"></div>
          ))}
        </div>
      );
    }

    if (photos.length === 0) {
      return (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <PhotoIcon className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No photos found</h3>
          <p className="text-gray-500 mb-4">
            {activeTab === 'your-photos' 
              ? "You haven't uploaded any photos yet." 
              : "No photos from your friends."}
          </p>
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 inline-block"
          >
            Create Post with Photo
          </Link>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {photos.map(photo => (
          <div 
            key={photo.id} 
            className="aspect-square relative group cursor-pointer rounded overflow-hidden"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.image_url}
              alt="Photo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
              <ArrowsPointingOutIcon className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <PageTemplate 
      title="Photos" 
      description="View photos from you and your friends."
    >
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('your-photos')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'your-photos'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Your Photos
          </button>
          <button
            onClick={() => setActiveTab('friends')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'friends'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Friends' Photos
          </button>
          <button
            onClick={() => setActiveTab('albums')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'albums'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Albums
          </button>
        </nav>
      </div>

      {renderContent()}

      {/* Photo Viewer Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={selectedPhoto.image_url}
                alt="Photo"
                className="w-full h-auto max-h-[70vh] object-contain bg-black"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full p-1 hover:bg-opacity-70"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center space-x-3 mb-2">
                <img
                  src={selectedPhoto.post.user.profile_picture || '/images/female_avatar.jpg'}
                  alt={`${selectedPhoto.post.user.first_name} ${selectedPhoto.post.user.last_name}`}
                  className="h-8 w-8 rounded-full object-cover"
                  crossOrigin="anonymous"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = '/images/female_avatar.jpg';
                  }}
                />
                <div>
                  <Link href={`/profile/${selectedPhoto.post.user.username}`} className="font-medium text-gray-900 hover:underline">
                    {selectedPhoto.post.user.first_name} {selectedPhoto.post.user.last_name}
                  </Link>
                  <p className="text-xs text-gray-500">
                    {formatDistanceToNow(new Date(selectedPhoto.created_at), { addSuffix: true })}
                  </p>
                </div>
              </div>
              
              {selectedPhoto.post.content && (
                <p className="text-gray-800 text-sm">{selectedPhoto.post.content}</p>
              )}
              
              <div className="mt-3 pt-3 border-t border-gray-100 flex justify-end">
                <Link href={`/posts/${selectedPhoto.post_id}`} className="text-blue-600 hover:underline text-sm">
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
