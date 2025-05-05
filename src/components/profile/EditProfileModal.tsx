'use client';

import { useState, useRef } from 'react';
import { UserProfile } from '@/types';
import { XMarkIcon, PhotoIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

interface EditProfileModalProps {
  user: UserProfile;
  onClose: () => void;
  onUpdate: (user: UserProfile) => void;
}

export default function EditProfileModal({ user, onClose, onUpdate }: EditProfileModalProps) {
  const { update } = useSession();

  const [formData, setFormData] = useState({
    firstName: user.first_name,
    lastName: user.last_name,
    bio: user.bio || '',
    location: user.location || '',
    website: user.website || '',
    dateOfBirth: user.date_of_birth ? new Date(user.date_of_birth).toISOString().split('T')[0] : '',
  });

  const [profilePictureFile, setProfilePictureFile] = useState<File | null>(null);
  const [profilePicturePreview, setProfilePicturePreview] = useState<string | null>(user.profile_picture);

  const [coverPhotoFile, setCoverPhotoFile] = useState<File | null>(null);
  const [coverPhotoPreview, setCoverPhotoPreview] = useState<string | null>(user.cover_photo);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const profilePictureInputRef = useRef<HTMLInputElement>(null);
  const coverPhotoInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePictureFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicturePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCoverPhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverPhotoFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError(null);

      const formDataToSend = new FormData();
      formDataToSend.append('firstName', formData.firstName);
      formDataToSend.append('lastName', formData.lastName);
      formDataToSend.append('bio', formData.bio);
      formDataToSend.append('location', formData.location);
      formDataToSend.append('website', formData.website);
      formDataToSend.append('dateOfBirth', formData.dateOfBirth);

      if (profilePictureFile) {
        formDataToSend.append('profilePicture', profilePictureFile);
      }

      if (profilePicturePreview && !profilePictureFile) {
        formDataToSend.append('currentProfilePicture', profilePicturePreview);
      }

      if (coverPhotoFile) {
        formDataToSend.append('coverPhoto', coverPhotoFile);
      }

      if (coverPhotoPreview && !coverPhotoFile) {
        formDataToSend.append('currentCoverPhoto', coverPhotoPreview);
      }

      const response = await fetch('/api/users/profile/update', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to update profile');
      }

      const data = await response.json();

      // Update the session with the new profile picture
      if (data.user.profile_picture) {
        console.log('Updating session with new profile picture:', data.user.profile_picture);
        await update({
          image: data.user.profile_picture
        });
      }

      onUpdate(data.user);
    } catch (error) {
      console.error('Error updating profile:', error);
      setError(error instanceof Error ? error.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-white to-gray-100 bg-opacity-90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 transform transition-all relative">
        <div className="flex justify-between items-center p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <h2 className="text-xl font-semibold text-gray-800">Edit Your Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors p-1 rounded-full hover:bg-gray-100"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 bg-white">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 p-4 rounded-md shadow-sm">
              <p className="text-red-700">{error}</p>
            </div>
          )}

          {/* Cover Photo */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Cover Photo
            </label>
            <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow-sm">
              {coverPhotoPreview ? (
                <img
                  src={coverPhotoPreview}
                  alt="Cover Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-blue-300 to-indigo-400" />
              )}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={() => coverPhotoInputRef.current?.click()}
                  className="bg-white rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
                >
                  <PhotoIcon className="h-6 w-6 text-gray-700" />
                </button>
              </div>
            </div>
            <input
              ref={coverPhotoInputRef}
              type="file"
              accept="image/*"
              onChange={handleCoverPhotoChange}
              className="hidden"
            />
          </div>

          {/* Profile Picture */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              Profile Picture
            </label>
            <div className="flex items-center">
              <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-100 border border-gray-200 shadow-sm">
                {profilePicturePreview ? (
                  <div className="w-full h-full bg-white flex items-center justify-center">
                    <img
                      src={profilePicturePreview}
                      alt="Profile Preview"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-full h-full bg-white flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-500">
                      {user.first_name.charAt(0)}{user.last_name.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-600 bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => profilePictureInputRef.current?.click()}
                    className="bg-white rounded-full p-1 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <PhotoIcon className="h-4 w-4 text-gray-700" />
                  </button>
                </div>
              </div>
              <div className="ml-4">
                <button
                  type="button"
                  onClick={() => profilePictureInputRef.current?.click()}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Change profile picture
                </button>
                <p className="text-xs text-gray-500 mt-1">
                  Recommended: Square image, at least 200x200 pixels
                </p>
              </div>
              <input
                ref={profilePictureInputRef}
                type="file"
                accept="image/*"
                onChange={handleProfilePictureChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-800 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white hover:border-blue-300 transition-colors"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-gray-800 mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white hover:border-blue-300 transition-colors"
              />
            </div>
          </div>

          {/* Bio */}
          <div className="mb-4">
            <label htmlFor="bio" className="block text-sm font-semibold text-gray-800 mb-1">
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white hover:border-blue-300 transition-colors"
              placeholder="Tell us about yourself"
            />
          </div>

          {/* Location */}
          <div className="mb-4">
            <label htmlFor="location" className="block text-sm font-semibold text-gray-800 mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white hover:border-blue-300 transition-colors"
              placeholder="City, Country"
            />
          </div>

          {/* Website */}
          <div className="mb-4">
            <label htmlFor="website" className="block text-sm font-semibold text-gray-800 mb-1">
              Website
            </label>
            <input
              type="text"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white hover:border-blue-300 transition-colors"
              placeholder="https://example.com"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-6">
            <label htmlFor="dateOfBirth" className="block text-sm font-semibold text-gray-800 mb-1">
              Date of Birth
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white hover:border-blue-300 transition-colors"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-3 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:shadow-md"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 border border-transparent rounded-md shadow-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all hover:shadow-lg"
              disabled={loading}
            >
              {loading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
