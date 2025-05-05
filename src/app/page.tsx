import { Suspense } from 'react';
import Link from 'next/link';
import NewsFeed from '@/components/home/NewsFeed';
import CreatePostForm from '@/components/home/CreatePostForm';
import LeftSidebar from '@/components/home/LeftSidebar';
import RightSidebar from '@/components/home/RightSidebar';
import WelcomeBanner from '@/components/home/WelcomeBanner';

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left sidebar - hidden on mobile */}
      <div className="hidden lg:block lg:col-span-3">
        <LeftSidebar />
      </div>

      {/* Main content */}
      <div className="col-span-1 lg:col-span-6 space-y-6">
        <WelcomeBanner />
        <CreatePostForm />
        <Suspense fallback={<div className="text-center py-10">Loading posts...</div>}>
          <NewsFeed />
        </Suspense>
      </div>

      {/* Right sidebar - hidden on mobile */}
      <div className="hidden lg:block lg:col-span-3">
        <RightSidebar />
      </div>
    </div>
  );
}
