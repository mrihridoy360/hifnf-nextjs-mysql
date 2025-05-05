'use client';

export default function ProfileSkeleton() {
  return (
    <div className="max-w-4xl mx-auto pb-8 animate-pulse">
      {/* Cover Photo Skeleton */}
      <div className="h-64 bg-gray-200 rounded-b-lg"></div>

      {/* Profile Info Skeleton */}
      <div className="relative px-4 sm:px-6 -mt-16">
        <div className="relative flex flex-col sm:flex-row items-center sm:items-end">
          {/* Profile Picture Skeleton */}
          <div className="h-32 w-32 rounded-full border-4 border-white bg-gray-300"></div>

          {/* Name and Bio Skeleton */}
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left flex-grow">
            <div className="h-7 bg-gray-300 rounded w-48 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-32 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          </div>

          {/* Action Button Skeleton */}
          <div className="mt-4 sm:mt-0">
            <div className="h-10 w-32 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        {/* Stats and Info Skeleton */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="h-6 bg-gray-300 rounded w-24 mb-4"></div>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="h-5 w-5 bg-gray-200 rounded-full mr-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
              <div className="flex items-center">
                <div className="h-5 w-5 bg-gray-200 rounded-full mr-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
              <div className="flex items-center">
                <div className="h-5 w-5 bg-gray-200 rounded-full mr-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-4">
            <div className="h-6 bg-gray-300 rounded w-24 mb-4"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="h-8 bg-gray-300 rounded w-12 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-16 mx-auto"></div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="h-8 bg-gray-300 rounded w-12 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-16 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Skeleton */}
        <div className="mt-6">
          <div className="h-7 bg-gray-300 rounded w-24 mb-4"></div>
          
          <div className="space-y-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="bg-white rounded-lg shadow p-4">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/5"></div>
                  </div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-40 bg-gray-200 rounded-lg mt-4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
