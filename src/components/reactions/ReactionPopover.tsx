'use client';

import { useState, useRef, useEffect } from 'react';
import { HandThumbUpIcon, HandThumbDownIcon } from '@heroicons/react/24/solid';

interface ReactionPopoverProps {
  postId: string;
  likesCount: number;
  dislikesCount: number;
  onShowReactions: (type: 'like' | 'dislike') => void;
}

export default function ReactionPopover({ 
  postId, 
  likesCount, 
  dislikesCount,
  onShowReactions
}: ReactionPopoverProps) {
  const [showPopover, setShowPopover] = useState(false);
  const [loading, setLoading] = useState(false);
  const [likeUsers, setLikeUsers] = useState<string[]>([]);
  const [dislikeUsers, setDislikeUsers] = useState<string[]>([]);
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch top users who reacted when hovering
  const fetchTopReactions = async () => {
    if (loading || likeUsers.length > 0 || dislikeUsers.length > 0) return;
    
    try {
      setLoading(true);
      
      // Fetch likes
      if (likesCount > 0) {
        const likeResponse = await fetch(`/api/posts/${postId}/reactions?type=like`);
        if (likeResponse.ok) {
          const likeData = await likeResponse.json();
          setLikeUsers(likeData.users.slice(0, 3).map((u: any) => `${u.first_name} ${u.last_name}`));
        }
      }
      
      // Fetch dislikes
      if (dislikesCount > 0) {
        const dislikeResponse = await fetch(`/api/posts/${postId}/reactions?type=dislike`);
        if (dislikeResponse.ok) {
          const dislikeData = await dislikeResponse.json();
          setDislikeUsers(dislikeData.users.slice(0, 3).map((u: any) => `${u.first_name} ${u.last_name}`));
        }
      }
    } catch (error) {
      console.error('Error fetching reactions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setShowPopover(true);
      fetchTopReactions();
    }, 300); // Delay to prevent flickering on quick mouse movements
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setShowPopover(false);
    }, 300); // Delay to prevent flickering on quick mouse movements
  };

  // Handle click outside to close popover
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current && 
        !popoverRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setShowPopover(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (likesCount === 0 && dislikesCount === 0) {
    return null;
  }

  return (
    <div className="relative">
      <div 
        ref={triggerRef}
        className="flex items-center space-x-2 cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {likesCount > 0 && (
          <div className="flex items-center" onClick={() => onShowReactions('like')}>
            <HandThumbUpIcon className="h-4 w-4 text-blue-500 mr-1" />
            <span>{likesCount}</span>
          </div>
        )}
        {dislikesCount > 0 && (
          <div className="flex items-center" onClick={() => onShowReactions('dislike')}>
            <HandThumbDownIcon className="h-4 w-4 text-red-500 mr-1" />
            <span>{dislikesCount}</span>
          </div>
        )}
      </div>

      {showPopover && (likesCount > 0 || dislikesCount > 0) && (
        <div 
          ref={popoverRef}
          className="absolute bottom-full left-0 mb-2 w-64 bg-white rounded-lg shadow-lg p-3 z-10 border border-gray-200"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {loading ? (
            <div className="flex items-center justify-center py-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-900"></div>
              <span className="ml-2 text-sm text-gray-500">Loading...</span>
            </div>
          ) : (
            <>
              {likesCount > 0 && (
                <div className="mb-2">
                  <div className="flex items-center mb-1">
                    <HandThumbUpIcon className="h-4 w-4 text-blue-500 mr-1" />
                    <span className="text-sm font-medium">{likesCount} {likesCount === 1 ? 'person' : 'people'}</span>
                  </div>
                  {likeUsers.length > 0 && (
                    <p className="text-xs text-gray-600">
                      {likeUsers.join(', ')}
                      {likesCount > likeUsers.length && ` and ${likesCount - likeUsers.length} others`}
                    </p>
                  )}
                  <button 
                    className="text-xs text-blue-600 hover:underline mt-1"
                    onClick={() => onShowReactions('like')}
                  >
                    View all
                  </button>
                </div>
              )}
              
              {dislikesCount > 0 && (
                <div>
                  <div className="flex items-center mb-1">
                    <HandThumbDownIcon className="h-4 w-4 text-red-500 mr-1" />
                    <span className="text-sm font-medium">{dislikesCount} {dislikesCount === 1 ? 'person' : 'people'}</span>
                  </div>
                  {dislikeUsers.length > 0 && (
                    <p className="text-xs text-gray-600">
                      {dislikeUsers.join(', ')}
                      {dislikesCount > dislikeUsers.length && ` and ${dislikesCount - dislikeUsers.length} others`}
                    </p>
                  )}
                  <button 
                    className="text-xs text-blue-600 hover:underline mt-1"
                    onClick={() => onShowReactions('dislike')}
                  >
                    View all
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
