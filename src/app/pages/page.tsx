'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';
import PageTemplate from '@/components/common/PageTemplate';
import { Page } from '@/types';

export default function PagesPage() {
  const { data: session, status } = useSession();
  const [pages, setPages] = useState<Page[]>([]);
  const [suggestedPages, setSuggestedPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('your-pages');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newPageData, setNewPageData] = useState({
    name: '',
    category: '',
    description: ''
  });

  useEffect(() => {
    const fetchPages = async () => {
      if (status !== 'authenticated') {
        setLoading(false);
        return;
      }

      try {
        // Fetch user's pages
        const response = await fetch('/api/pages');
        if (response.ok) {
          const data = await response.json();
          setPages(data.pages || []);
        }

        // Fetch suggested pages
        const suggestedResponse = await fetch('/api/pages/suggested');
        if (suggestedResponse.ok) {
          const data = await suggestedResponse.json();
          setSuggestedPages(data.pages || []);
        }
      } catch (error) {
        console.error('Error fetching pages:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, [status]);

  const handleCreatePage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newPageData.name.trim() || !newPageData.category.trim()) {
      alert('Page name and category are required');
      return;
    }

    try {
      const response = await fetch('/api/pages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPageData),
      });

      if (response.ok) {
        const data = await response.json();
        setPages(prev => [data.page, ...prev]);
        setShowCreateModal(false);
        setNewPageData({
          name: '',
          category: '',
          description: ''
        });
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to create page');
      }
    } catch (error) {
      console.error('Error creating page:', error);
      alert('An error occurred while creating the page');
    }
  };

  const handleFollowPage = async (pageId: string, isFollowing: boolean) => {
    try {
      const response = await fetch(`/api/pages/${pageId}/${isFollowing ? 'unfollow' : 'follow'}`, {
        method: 'POST',
      });

      if (response.ok) {
        if (isFollowing) {
          // Update pages list
          setPages(prev => prev.map(page => 
            page.id === pageId ? { ...page, is_following: false, followers_count: Math.max(0, (page.followers_count || 0) - 1) } : page
          ));
        } else {
          // Move from suggested to following
          const pageToMove = suggestedPages.find(page => page.id === pageId);
          if (pageToMove) {
            const updatedPage = { 
              ...pageToMove, 
              is_following: true,
              followers_count: (pageToMove.followers_count || 0) + 1
            };
            setPages(prev => [updatedPage, ...prev]);
            setSuggestedPages(prev => prev.filter(page => page.id !== pageId));
          }
        }
      }
    } catch (error) {
      console.error(`Error ${isFollowing ? 'unfollowing' : 'following'} page:`, error);
    }
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center space-x-3">
              <div className="h-16 w-16 bg-gray-300 rounded-lg"></div>
              <div className="flex-1">
                <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    switch (activeTab) {
      case 'discover':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {suggestedPages.length > 0 ? (
              suggestedPages.map(page => (
                <div key={page.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 relative">
                    {page.cover_photo && (
                      <img
                        src={page.cover_photo}
                        alt={page.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-4 flex items-start">
                    <div className="h-16 w-16 rounded-lg bg-white border border-gray-200 -mt-12 mr-3 overflow-hidden shadow-sm relative z-10">
                      {page.profile_picture ? (
                        <img
                          src={page.profile_picture}
                          alt={page.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-xl">
                          {page.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{page.name}</h3>
                      <p className="text-sm text-gray-500 mb-1">{page.category}</p>
                      <p className="text-xs text-gray-500 mb-3">
                        {page.followers_count || 0} {page.followers_count === 1 ? 'follower' : 'followers'}
                      </p>
                      
                      <button
                        onClick={() => handleFollowPage(page.id, false)}
                        className="w-full px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                      >
                        Follow
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No suggested pages available right now.</p>
              </div>
            )}
          </div>
        );
      case 'your-pages':
      default:
        return (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Pages</h2>
              <button
                onClick={() => setShowCreateModal(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
              >
                <PlusIcon className="h-4 w-4 mr-1" />
                Create New Page
              </button>
            </div>

            {pages.length > 0 ? (
              <div className="space-y-4">
                {pages.map(page => (
                  <div key={page.id} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm flex items-center">
                    <div className="h-16 w-16 rounded-lg bg-white border border-gray-200 overflow-hidden mr-4">
                      {page.profile_picture ? (
                        <img
                          src={page.profile_picture}
                          alt={page.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500 font-bold text-xl">
                          {page.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{page.name}</h3>
                          <p className="text-sm text-gray-500">{page.category}</p>
                          <p className="text-xs text-gray-500">
                            {page.followers_count || 0} {page.followers_count === 1 ? 'follower' : 'followers'}
                          </p>
                        </div>
                        
                        <div className="flex space-x-2">
                          <Link
                            href={`/pages/${page.id}`}
                            className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-md hover:bg-gray-200"
                          >
                            View
                          </Link>
                          
                          {page.is_following && (
                            <button
                              onClick={() => handleFollowPage(page.id, true)}
                              className="px-3 py-1.5 bg-gray-100 text-gray-800 text-sm rounded-md hover:bg-gray-200"
                            >
                              Unfollow
                            </button>
                          )}
                          
                          {page.creator_id === session?.user?.id && (
                            <Link
                              href={`/pages/${page.id}/manage`}
                              className="px-3 py-1.5 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700"
                            >
                              Manage
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-1">You don't have any pages yet</h3>
                <p className="text-gray-500 mb-4">Create a page for your business, brand, or organization.</p>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Create Page
                </button>
              </div>
            )}
          </>
        );
    }
  };

  return (
    <PageTemplate 
      title="Pages" 
      description="Create and manage pages for your business, brand, or organization."
    >
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('your-pages')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'your-pages'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Your Pages
          </button>
          <button
            onClick={() => setActiveTab('discover')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'discover'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Discover
          </button>
        </nav>
      </div>

      {renderContent()}

      {/* Create Page Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">Create New Page</h2>
            <form onSubmit={handleCreatePage}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Page Name*
                </label>
                <input
                  type="text"
                  id="name"
                  value={newPageData.name}
                  onChange={(e) => setNewPageData({...newPageData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category*
                </label>
                <select
                  id="category"
                  value={newPageData.category}
                  onChange={(e) => setNewPageData({...newPageData, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="Business">Business</option>
                  <option value="Brand">Brand</option>
                  <option value="Community">Community</option>
                  <option value="Education">Education</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Cause">Cause</option>
                  <option value="Non-Profit">Non-Profit</option>
                  <option value="Website">Website</option>
                  <option value="Public Figure">Public Figure</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  value={newPageData.description}
                  onChange={(e) => setNewPageData({...newPageData, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>
              
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Create Page
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </PageTemplate>
  );
}
