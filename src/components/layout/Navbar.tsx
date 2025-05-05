'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import {
  HomeIcon,
  UserGroupIcon,
  BellIcon,
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export default function Navbar() {
  const { data: session, status, update } = useSession();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch user profile data to ensure we have the latest profile picture
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (status === 'authenticated' && session?.user?.username) {
        try {
          console.log('Session status:', status);
          console.log('Current session:', session);

          const response = await fetch(`/api/users/${session.user.username}?t=${new Date().getTime()}`);
          if (response.ok) {
            const data = await response.json();
            if (data.user?.profile_picture && data.user.profile_picture !== session.user.image) {
              console.log('Updating session with fetched profile picture in navbar:', data.user.profile_picture);
              await update({
                image: data.user.profile_picture
              });
            }
          }
        } catch (error) {
          console.error('Error fetching user profile in navbar:', error);
        }
      } else if (status === 'loading') {
        console.log('Session is loading...');
      } else if (status === 'unauthenticated') {
        console.log('User is not authenticated');
      }
    };

    fetchUserProfile();
  }, [status, session?.user?.username, update]);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Search for:', searchQuery);
  };

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/auth/signin' });
  };

  // Don't show navbar on auth pages
  if (pathname?.startsWith('/auth/')) {
    return null;
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-blue-600 font-bold text-2xl">
                Facebook Clone
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`${
                  isActive('/')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                <HomeIcon className="h-6 w-6 mr-1" />
                <span className="hidden md:inline">Home</span>
              </Link>
              <Link
                href="/friends"
                className={`${
                  isActive('/friends')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                <UserGroupIcon className="h-6 w-6 mr-1" />
                <span className="hidden md:inline">Friends</span>
              </Link>
              <Link
                href="/messages"
                className={`${
                  isActive('/messages')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                <ChatBubbleLeftRightIcon className="h-6 w-6 mr-1" />
                <span className="hidden md:inline">Messages</span>
              </Link>
              <Link
                href="/notifications"
                className={`${
                  isActive('/notifications')
                    ? 'border-blue-500 text-gray-900'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                <BellIcon className="h-6 w-6 mr-1" />
                <span className="hidden md:inline">Notifications</span>
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
              <form onSubmit={handleSearch} className="max-w-lg w-full lg:max-w-xs">
                <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    id="search"
                    name="search"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Search"
                    type="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
            {status === 'authenticated' ? (
              <div className="ml-3 relative">
                <div>
                  <Link href={`/profile/${session.user.username}`} className="flex items-center">
                    <span className="sr-only">Open user menu</span>
                    {/* Debug profile picture URL */}
                    {console.log('Navbar profile picture:', session.user.image)}
                    <img
                      className="h-8 w-8 rounded-full object-cover"
                      src={session.user.image || '/images/female_avatar.jpg'}
                      alt={session.user.name || 'User'}
                      crossOrigin="anonymous"
                      onError={(e) => {
                        console.error('Error loading profile picture in navbar:', e);
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.src = '/images/female_avatar.jpg';
                      }}
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
                      {session.user.name}
                    </span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link
                  href="/auth/signin"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/register"
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Sign up
                </Link>
              </div>
            )}
            {status === 'authenticated' && (
              <button
                onClick={handleSignOut}
                className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
              >
                Sign out
              </button>
            )}
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className={`${
                isActive('/')
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              <div className="flex items-center">
                <HomeIcon className="h-6 w-6 mr-3" />
                Home
              </div>
            </Link>
            <Link
              href="/friends"
              className={`${
                isActive('/friends')
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              <div className="flex items-center">
                <UserGroupIcon className="h-6 w-6 mr-3" />
                Friends
              </div>
            </Link>
            <Link
              href="/messages"
              className={`${
                isActive('/messages')
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              <div className="flex items-center">
                <ChatBubbleLeftRightIcon className="h-6 w-6 mr-3" />
                Messages
              </div>
            </Link>
            <Link
              href="/notifications"
              className={`${
                isActive('/notifications')
                  ? 'bg-blue-50 border-blue-500 text-blue-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              <div className="flex items-center">
                <BellIcon className="h-6 w-6 mr-3" />
                Notifications
              </div>
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            {status === 'authenticated' ? (
              <>
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    {/* Debug profile picture URL */}
                    {console.log('Mobile menu profile picture:', session.user.image)}
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={session.user.image || '/images/female_avatar.jpg'}
                      alt={session.user.name || 'User'}
                      crossOrigin="anonymous"
                      onError={(e) => {
                        console.error('Error loading profile picture in mobile menu:', e);
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.src = '/images/female_avatar.jpg';
                      }}
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">{session.user.name}</div>
                    <div className="text-sm font-medium text-gray-500">{session.user.email}</div>
                  </div>
                </div>
                <div className="mt-3 space-y-1">
                  <Link
                    href={`/profile/${session.user.username}`}
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Your Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Settings
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block w-full text-left px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </div>
              </>
            ) : (
              <div className="mt-3 space-y-1">
                <Link
                  href="/auth/signin"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign in
                </Link>
                <Link
                  href="/auth/register"
                  className="block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100"
                >
                  Sign up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
