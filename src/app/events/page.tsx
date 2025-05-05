'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { CalendarIcon, PlusIcon, MapPinIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import PageTemplate from '@/components/common/PageTemplate';
import { format, parseISO, isFuture, isPast, isToday } from 'date-fns';

interface Event {
  id: string;
  name: string;
  description: string;
  location: string;
  start_time: string;
  end_time: string;
  cover_photo: string | null;
  creator_id: string;
  created_at: string;
  attendees_count: number;
  is_attending: boolean;
  creator: {
    username: string;
    first_name: string;
    last_name: string;
    profile_picture: string | null;
  };
}

export default function EventsPage() {
  const { data: session, status } = useSession();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('upcoming');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newEventData, setNewEventData] = useState({
    name: '',
    description: '',
    location: '',
    start_time: '',
    end_time: ''
  });

  useEffect(() => {
    const fetchEvents = async () => {
      if (status !== 'authenticated') {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/events');
        if (response.ok) {
          const data = await response.json();
          setEvents(data.events || []);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, [status]);

  const handleCreateEvent = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newEventData.name.trim() || !newEventData.start_time || !newEventData.end_time) {
      alert('Event name, start time, and end time are required');
      return;
    }

    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEventData),
      });

      if (response.ok) {
        const data = await response.json();
        setEvents(prev => [data.event, ...prev]);
        setShowCreateModal(false);
        setNewEventData({
          name: '',
          description: '',
          location: '',
          start_time: '',
          end_time: ''
        });
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to create event');
      }
    } catch (error) {
      console.error('Error creating event:', error);
      alert('An error occurred while creating the event');
    }
  };

  const handleAttendEvent = async (eventId: string, isAttending: boolean) => {
    try {
      const response = await fetch(`/api/events/${eventId}/${isAttending ? 'leave' : 'attend'}`, {
        method: 'POST',
      });

      if (response.ok) {
        // Update the events list
        setEvents(prev => prev.map(event => 
          event.id === eventId 
            ? { 
                ...event, 
                is_attending: !isAttending,
                attendees_count: isAttending 
                  ? Math.max(0, event.attendees_count - 1) 
                  : event.attendees_count + 1
              } 
            : event
        ));
      }
    } catch (error) {
      console.error(`Error ${isAttending ? 'leaving' : 'attending'} event:`, error);
    }
  };

  const filteredEvents = events.filter(event => {
    const startDate = parseISO(event.start_time);
    
    switch (activeTab) {
      case 'upcoming':
        return isFuture(startDate) || isToday(startDate);
      case 'past':
        return isPast(startDate) && !isToday(startDate);
      case 'attending':
        return event.is_attending;
      default:
        return true;
    }
  });

  const renderContent = () => {
    if (loading) {
      return (
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-40 bg-gray-300"></div>
              <div className="p-4">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-1/2 mb-3"></div>
                <div className="flex items-center space-x-2 mb-2">
                  <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (filteredEvents.length === 0) {
      return (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <CalendarIcon className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No events found</h3>
          <p className="text-gray-500 mb-4">
            {activeTab === 'upcoming' 
              ? "There are no upcoming events. Create one to get started!" 
              : activeTab === 'past' 
                ? "You haven't attended any past events."
                : "You're not attending any events."}
          </p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Event
          </button>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredEvents.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="h-40 bg-gradient-to-r from-blue-400 to-indigo-500 relative">
              {event.cover_photo ? (
                <img
                  src={event.cover_photo}
                  alt={event.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <CalendarIcon className="h-16 w-16 text-white opacity-50" />
                </div>
              )}
              <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-medium">
                {isPast(parseISO(event.start_time)) && !isToday(parseISO(event.start_time)) 
                  ? 'Past Event' 
                  : isToday(parseISO(event.start_time)) 
                    ? 'Today' 
                    : 'Upcoming'}
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{event.name}</h3>
              <p className="text-sm text-gray-500 mb-3">
                Hosted by {event.creator.first_name} {event.creator.last_name}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <ClockIcon className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{format(parseISO(event.start_time), 'EEEE, MMMM d, yyyy • h:mm a')}</span>
                </div>
                
                {event.location && (
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPinIcon className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{event.location}</span>
                  </div>
                )}
                
                <div className="flex items-center text-sm text-gray-600">
                  <UserGroupIcon className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{event.attendees_count} {event.attendees_count === 1 ? 'person' : 'people'} going</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Link 
                  href={`/events/${event.id}`}
                  className="flex-1 px-3 py-2 bg-gray-100 text-gray-800 text-sm rounded-md hover:bg-gray-200 text-center"
                >
                  View Details
                </Link>
                
                {!isPast(parseISO(event.end_time)) && (
                  <button
                    onClick={() => handleAttendEvent(event.id, event.is_attending)}
                    className={`flex-1 px-3 py-2 text-sm rounded-md text-center ${
                      event.is_attending
                        ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {event.is_attending ? 'Not Going' : 'Going'}
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <PageTemplate 
      title="Events" 
      description="Discover events, create your own, and connect with people."
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="border-b border-gray-200 flex-grow">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'upcoming'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab('attending')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'attending'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Attending
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'past'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Past
            </button>
          </nav>
        </div>
        
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
        >
          <PlusIcon className="h-4 w-4 mr-1" />
          Create Event
        </button>
      </div>

      {renderContent()}

      {/* Create Event Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4">Create New Event</h2>
            <form onSubmit={handleCreateEvent}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Event Name*
                </label>
                <input
                  type="text"
                  id="name"
                  value={newEventData.name}
                  onChange={(e) => setNewEventData({...newEventData, name: e.target.value})}
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
                  value={newEventData.description}
                  onChange={(e) => setNewEventData({...newEventData, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={newEventData.location}
                  onChange={(e) => setNewEventData({...newEventData, location: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Event location"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="start_time" className="block text-sm font-medium text-gray-700 mb-1">
                    Start Time*
                  </label>
                  <input
                    type="datetime-local"
                    id="start_time"
                    value={newEventData.start_time}
                    onChange={(e) => setNewEventData({...newEventData, start_time: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="end_time" className="block text-sm font-medium text-gray-700 mb-1">
                    End Time*
                  </label>
                  <input
                    type="datetime-local"
                    id="end_time"
                    value={newEventData.end_time}
                    onChange={(e) => setNewEventData({...newEventData, end_time: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
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
                  Create Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </PageTemplate>
  );
}
