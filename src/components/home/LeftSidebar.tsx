'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useEffect } from 'react';
import {
  UserIcon,
  UserGroupIcon,
  UsersIcon,
  BookmarkIcon,
  ClockIcon,
  CalendarIcon,
  PhotoIcon,
  VideoCameraIcon,
  NewspaperIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline';

export default function LeftSidebar() {
  const { data: session, status, update } = useSession();

  // Fetch user profile data to ensure we have the latest profile picture
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (status === 'authenticated' && session?.user?.username) {
        try {
          const response = await fetch(`/api/users/${session.user.username}?t=${new Date().getTime()}`);
          if (response.ok) {
            const data = await response.json();
            if (data.user?.profile_picture && data.user.profile_picture !== session.user.image) {
              console.log('Updating session with fetched profile picture in sidebar:', data.user.profile_picture);
              await update({
                image: data.user.profile_picture
              });
            }
          }
        } catch (error) {
          console.error('Error fetching user profile in sidebar:', error);
        }
      }
    };

    fetchUserProfile();
  }, [status, session?.user?.username, update]);

  return (
    <div className="bg-white rounded-lg shadow p-4 sticky top-20">
      {status === 'authenticated' && (
        <Link href={`/profile/${session.user.username}`} className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 mb-2">
          {/* Debug session user image */}
          {console.log('Session user image:', session.user.image)}
          <img
            src={session.user.image || '/images/female_avatar.jpg'}
            alt={session.user.name || 'User'}
            className="h-8 w-8 rounded-full object-cover"
            crossOrigin="anonymous"
            onError={(e) => {
              console.error('Error loading sidebar profile picture:', e);
              const target = e.target as HTMLImageElement;
              target.onerror = null; // Prevent infinite loop
              target.src = '/images/female_avatar.jpg';
            }}
          />
          <span className="font-medium">{session.user.name}</span>
        </Link>
      )}

      <nav className="space-y-1">
        <Link href="/friends" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
          <UserGroupIcon className="h-6 w-6 text-blue-500" />
          <span>Friends</span>
        </Link>

        <Link href="/groups" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
          <UsersIcon className="h-6 w-6 text-blue-500" />
          <span>Groups</span>
        </Link>

        <Link href="/saved" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
          <BookmarkIcon className="h-6 w-6 text-purple-500" />
          <span>Saved</span>
        </Link>

        <Link href="/memories" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
          <ClockIcon className="h-6 w-6 text-blue-500" />
          <span>Memories</span>
        </Link>

        <Link href="/events" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
          <CalendarIcon className="h-6 w-6 text-red-500" />
          <span>Events</span>
        </Link>

        <Link href="/photos" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
          <PhotoIcon className="h-6 w-6 text-green-500" />
          <span>Photos</span>
        </Link>

        <Link href="/videos" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
          <VideoCameraIcon className="h-6 w-6 text-red-500" />
          <span>Videos</span>
        </Link>
      </nav>

      <div className="border-t border-gray-200 mt-4 pt-4">
        <h3 className="font-medium text-gray-500 mb-2 px-2">Your Shortcuts</h3>
        <nav className="space-y-1">
          <Link href="/pages" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
            <NewspaperIcon className="h-6 w-6 text-blue-500" />
            <span>Pages</span>
          </Link>

          <Link href="/marketplace" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 text-gray-700">
            <ShoppingBagIcon className="h-6 w-6 text-green-500" />
            <span>Marketplace</span>
          </Link>
        </nav>
      </div>

      <div className="text-xs text-gray-500 mt-4 px-2">
        <p>Privacy · Terms · Advertising · Ad Choices · Cookies · More · Facebook Clone © 2023</p>
      </div>
    </div>
  );
}
