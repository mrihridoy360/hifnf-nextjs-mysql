'use client';

import { ReactNode } from 'react';
import LeftSidebar from '@/components/home/LeftSidebar';

interface PageTemplateProps {
  title: string;
  children: ReactNode;
  description?: string;
}

export default function PageTemplate({ title, description, children }: PageTemplateProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Left sidebar - hidden on mobile */}
      <div className="hidden lg:block lg:col-span-3">
        <LeftSidebar />
      </div>

      {/* Main content */}
      <div className="col-span-1 lg:col-span-9 space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
          {description && <p className="text-gray-600 mb-4">{description}</p>}
          <div className="border-t border-gray-200 pt-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
