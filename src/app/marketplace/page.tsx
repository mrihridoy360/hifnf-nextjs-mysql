'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { ShoppingBagIcon, PlusIcon, TagIcon, MapPinIcon } from '@heroicons/react/24/outline';
import PageTemplate from '@/components/common/PageTemplate';
import { formatDistanceToNow } from 'date-fns';

interface MarketplaceItem {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  category: string;
  condition: string;
  image_url: string | null;
  created_at: string;
  seller: {
    id: string;
    username: string;
    first_name: string;
    last_name: string;
    profile_picture: string | null;
  };
}

export default function MarketplacePage() {
  const { data: session, status } = useSession();
  const [items, setItems] = useState<MarketplaceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('browse');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newItemData, setNewItemData] = useState({
    title: '',
    description: '',
    price: '',
    location: '',
    category: '',
    condition: 'new',
    image: null as File | null
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'vehicles', name: 'Vehicles' },
    { id: 'property', name: 'Property' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'furniture', name: 'Furniture' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'hobbies', name: 'Hobbies' },
    { id: 'jobs', name: 'Jobs' },
    { id: 'services', name: 'Services' }
  ];

  useEffect(() => {
    const fetchItems = async () => {
      if (status !== 'authenticated') {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/marketplace');
        if (response.ok) {
          const data = await response.json();
          setItems(data.items || []);
        }
      } catch (error) {
        console.error('Error fetching marketplace items:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [status]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setNewItemData({...newItemData, image: file});

    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleCreateItem = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newItemData.title.trim() || !newItemData.price || !newItemData.category) {
      alert('Title, price, and category are required');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('title', newItemData.title);
      formData.append('description', newItemData.description);
      formData.append('price', newItemData.price);
      formData.append('location', newItemData.location);
      formData.append('category', newItemData.category);
      formData.append('condition', newItemData.condition);
      
      if (newItemData.image) {
        formData.append('image', newItemData.image);
      }

      const response = await fetch('/api/marketplace', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        setItems(prev => [data.item, ...prev]);
        setShowCreateModal(false);
        setNewItemData({
          title: '',
          description: '',
          price: '',
          location: '',
          category: '',
          condition: 'new',
          image: null
        });
        setImagePreview(null);
      } else {
        const error = await response.json();
        alert(error.message || 'Failed to create listing');
      }
    } catch (error) {
      console.error('Error creating marketplace listing:', error);
      alert('An error occurred while creating the listing');
    }
  };

  const filteredItems = items.filter(item => {
    if (activeTab === 'your-listings') {
      return item.seller.id === session?.user?.id;
    }
    
    if (selectedCategory !== 'all') {
      return item.category === selectedCategory;
    }
    
    return true;
  });

  const renderContent = () => {
    if (loading) {
      return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
            <div key={i} className="animate-pulse">
              <div className="aspect-square bg-gray-300 rounded-lg mb-2"></div>
              <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            </div>
          ))}
        </div>
      );
    }

    if (filteredItems.length === 0) {
      return (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <ShoppingBagIcon className="h-12 w-12 mx-auto text-gray-400 mb-3" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No listings found</h3>
          <p className="text-gray-500 mb-4">
            {activeTab === 'your-listings' 
              ? "You haven't created any listings yet." 
              : "No items available in this category."}
          </p>
          <button
            onClick={() => setShowCreateModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Listing
          </button>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredItems.map(item => (
          <Link 
            key={item.id} 
            href={`/marketplace/${item.id}`}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-square bg-gray-100 relative">
              {item.image_url ? (
                <img
                  src={item.image_url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <ShoppingBagIcon className="h-16 w-16 text-gray-300" />
                </div>
              )}
            </div>
            
            <div className="p-3">
              <h3 className="font-semibold text-lg mb-1 line-clamp-1">{item.title}</h3>
              <p className="text-blue-600 font-medium mb-1">${parseFloat(item.price.toString()).toFixed(2)}</p>
              
              <div className="flex items-center text-xs text-gray-500 mb-2">
                <MapPinIcon className="h-3 w-3 mr-1" />
                <span className="line-clamp-1">{item.location || 'No location'}</span>
              </div>
              
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{formatDistanceToNow(new Date(item.created_at), { addSuffix: true })}</span>
                <span className="bg-gray-100 px-2 py-0.5 rounded">{item.condition}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <PageTemplate 
      title="Marketplace" 
      description="Buy and sell items with people in your community."
    >
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="border-b border-gray-200 flex-grow">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('browse')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'browse'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Browse
            </button>
            <button
              onClick={() => setActiveTab('your-listings')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'your-listings'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Your Listings
            </button>
          </nav>
        </div>
        
        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
        >
          <PlusIcon className="h-4 w-4 mr-1" />
          Create Listing
        </button>
      </div>

      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 pb-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {renderContent()}

      {/* Create Listing Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Create New Listing</h2>
            <form onSubmit={handleCreateItem}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Title*
                </label>
                <input
                  type="text"
                  id="title"
                  value={newItemData.title}
                  onChange={(e) => setNewItemData({...newItemData, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                  Price*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">$</span>
                  </div>
                  <input
                    type="number"
                    id="price"
                    value={newItemData.price}
                    onChange={(e) => setNewItemData({...newItemData, price: e.target.value})}
                    className="w-full pl-7 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    min="0"
                    step="0.01"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category*
                </label>
                <select
                  id="category"
                  value={newItemData.category}
                  onChange={(e) => setNewItemData({...newItemData, category: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select a category</option>
                  {categories.filter(c => c.id !== 'all').map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="condition" className="block text-sm font-medium text-gray-700 mb-1">
                  Condition
                </label>
                <select
                  id="condition"
                  value={newItemData.condition}
                  onChange={(e) => setNewItemData({...newItemData, condition: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="new">New</option>
                  <option value="like-new">Like New</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                  <option value="poor">Poor</option>
                </select>
              </div>
              
              <div className="mb-4">
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={newItemData.location}
                  onChange={(e) => setNewItemData({...newItemData, location: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="City, State"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  value={newItemData.description}
                  onChange={(e) => setNewItemData({...newItemData, description: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    {imagePreview ? (
                      <div className="mb-3">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="mx-auto h-32 w-auto"
                        />
                      </div>
                    ) : (
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="image-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none"
                      >
                        <span>Upload an image</span>
                        <input
                          id="image-upload"
                          name="image-upload"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
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
                  Create Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </PageTemplate>
  );
}
