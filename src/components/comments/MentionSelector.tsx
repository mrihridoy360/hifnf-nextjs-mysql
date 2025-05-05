'use client';

import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

interface User {
  id: string;
  username: string;
  first_name: string;
  last_name: string;
  profile_picture: string | null;
}

interface MentionSelectorProps {
  query: string;
  onSelect: (userId: string, username: string) => void;
  onClose: () => void;
}

export default function MentionSelector({ query, onSelect, onClose }: MentionSelectorProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    const fetchUsers = async () => {
      if (debouncedQuery.length < 1) {
        setUsers([]);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(`/api/users/search?q=${debouncedQuery}`);
        if (response.ok) {
          const data = await response.json();
          setUsers(data.users);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [debouncedQuery]);

  if (users.length === 0 && !loading) {
    return null;
  }

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto">
      {loading ? (
        <div className="p-3 text-gray-500">Loading...</div>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <button
                type="button"
                onClick={() => onSelect(user.id, user.username)}
                className="w-full text-left px-3 py-2 hover:bg-gray-100 flex items-center"
              >
                <img
                  src={user.profile_picture || 'https://via.placeholder.com/40'}
                  alt={user.username}
                  className="h-8 w-8 rounded-full mr-2"
                />
                <div>
                  <div className="font-medium">{user.first_name} {user.last_name}</div>
                  <div className="text-sm text-gray-500">@{user.username}</div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
