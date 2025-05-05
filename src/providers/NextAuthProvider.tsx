'use client';

import { SessionProvider } from 'next-auth/react';
import { ReactNode } from 'react';

export function NextAuthProvider({ children }: { children: ReactNode }) {
  return (
    <SessionProvider
      refetchInterval={5 * 60} // Refetch session every 5 minutes
      refetchOnWindowFocus={true} // Refetch when window gets focus
      basePath="/api/auth"
    >
      {children}
    </SessionProvider>
  );
}
