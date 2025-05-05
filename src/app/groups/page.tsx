'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { PlusIcon, UsersIcon } from '@heroicons/react/24/outline';
import PageTemplate from '@/components/common/PageTemplate';
import { Group } from '@/types';

export default function GroupsPage() {
  const { data: session, status } = useSession();
  const [groups, setGroups] = useState<Group[]>([]);
  const [suggestedGroups, setSuggestedGroups] = useState<Group[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('my-groups');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newGroupData, setNewGroupData] = useState({
    name: '',
    description: '',
    privacy: 'public'
  });

  useEffect(() => {
    const fetchGroups = async () => {
      if (status !== 'authenticated') {
        setLoading(false);
        return;
      }

      try {
        // Fetch user's groups
        const response = await fetch('/api/groups');
        if (response.ok) {
          const data = await response.json();
          setGroups(data.groups || []);
        }

        // Fetch suggested groups
        const suggestedResponse = await fetch('/api/groups/suggested');
        if (suggestedResponse.ok) {
          const data = await suggestedResponse.json();
          setSuggestedGroups(data.groups || []);
        }
      } catch (error) {
        console.error('Error fetching groups:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGroups();
  }, [status]);

  const handleCreateGroup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newGroupData.name.trim()) {
      alert('Group name is required');
      return;
    }

    try {
      const response = await fetch('/api/groups', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newGroupData),
      });

      if (response.ok) {
        const data = await response.json();
        setGroups(prev => [data.group, ...prev]);
        setShowCreateModal(false);
        setNewGroupData({
          name: '',
          description: '',
          privacy: 'public'
        });
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to create group');
      }
    } catch (error) {
      console.error('Error creating group:', error);
      alert('An error occurred while creating the group');
    }
  };

  const handleJoinGroup = async (groupId: string) => {
    try {
      const response = await fetch(`/api/groups/${groupId}/join`, {
        method: 'POST',
      });

      if (response.ok) {
        // Update suggested groups list
        setSuggestedGroups(prev => prev.filter(group => group.id !== groupId));
        
        // Fetch updated groups
        const groupsResponse = await fetch('/api/groups');
        if (groupsResponse.ok) {
          const data = await groupsResponse.json();
          setGroups(data.groups || []);
        }
      }
    } catch (error) {
      console.error('Error joining group:', error);
    }
  };

  const renderTabContent = () => {
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
            {suggestedGroups.length > 0 ? (
              suggestedGroups.map(group => (
                <div key={group.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                  <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 relative">
                    {group.cover_photo && (
                      <img
                        src={group.cover_photo}
                        alt={group.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{group.name}</h3>
                    <p className="text-sm text-gray-500 mb-3">
                      {group.members_count || 0} members • {group.privacy === 'public' ? 'Public group' : 'Private group'}
                    </p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {group.description || 'No description available.'}
                    </p>
                    <button
                      onClick={() => handleJoinGroup(group.id)}
                      className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center justify-center"
                    >
                      <PlusIcon className="h-4 w-4 mr-1" />
                      Join Group
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No suggested groups available right now.</p>
              </div>
            )}
          </div>
        );
      case 'my-groups':
      default:
        return (
          <>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Your Groups</h2>
              <button
                onClick={() => setShowCreateModal(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
              >
                <PlusIcon className="h-4 w-4 mr-1" />
                Create New Group
              </button>
            </div>

            {groups.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {groups.map(group => (
                  <Link 
                    key={group.id} 
                    href={`/groups/${group.id}`}
                    className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="h-32 bg-gradient-to-r from-blue-400 to-indigo-500 relative">
                      {group.cover_photo && (
                        <img
                          src={group.cover_photo}
                          alt={group.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{group.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {group.members_count || 0} members • {group.privacy === 'public' ? 'Public group' : 'Private group'}
                      </p>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {group.description || 'No description available.'}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <UsersIcon className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                <h3 className="text-lg font-medium text-gray-900 mb-1">You haven't joined any groups yet</h3>
                <p className="text-gray-500 mb-4">Groups are great places to connect with people who share your interests.</p>
                <button
                  onClick={() => setActiveTab('discover')}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Discover Groups
                </button>
              </div>
            )}
          </>
        );
    }
  };

  return (
    <PageTemplate 
      title="Groups" 
      description="Connect with people who share your interests."
    >
      <div className="mb-6 border-b border-gray-200">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('my-groups')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'my-groups'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Your Groups
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

      {renderTabContent()}

      {/* Create Group Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">Create New Group</h2>
            <form onSubmit={handleCreateGroup}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Group Name*
                </label>
                <input
                  type="text"
                  id="name"
                  value={newGroupData.name}
                  onChange={(e) => setNewGroupData({...newGroupData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  value={newGroupData.description}
                  onChange={(e) => setNewGroupData({...newGroupData, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="privacy" className="block text-sm font-medium text-gray-700 mb-1">
                  Privacy
                </label>
                <select
                  id="privacy"
                  value={newGroupData.privacy}
                  onChange={(e) => setNewGroupData({...newGroupData, privacy: e.target.value as 'public' | 'private'})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="public">Public - Anyone can see the group</option>
                  <option value="private">Private - Only members can see the group</option>
                </select>
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
                  Create Group
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </PageTemplate>
  );
}
