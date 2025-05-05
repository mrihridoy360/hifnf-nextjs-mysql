'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function WelcomeBanner() {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return null; // Don't show welcome banner for logged in users
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Facebook Clone</h1>
      <p className="text-gray-600 mb-4">
        Connect with friends and the world around you on Facebook Clone.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/auth/register"
          className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Create New Account
        </Link>
        <Link
          href="/auth/signin"
          className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          Log In
        </Link>
      </div>
    </div>
  );
}
