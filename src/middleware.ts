import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const token = await getToken({
    req: request,
    secret: process.env.NEXTAUTH_SECRET
  });

  console.log('Middleware token:', token ? 'Found' : 'Not found');
  const isAuthenticated = !!token;

  // Define protected routes
  const protectedPaths = [
    '/profile',
    '/messages',
    '/friends',
    '/notifications',
    '/settings',
  ];

  // Check if the path is protected
  const isProtectedPath = protectedPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  );

  // Redirect to login if accessing a protected route without authentication
  if (isProtectedPath && !isAuthenticated) {
    const url = new URL('/auth/signin', request.url);
    url.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  // Redirect to home if accessing auth pages while authenticated
  if (request.nextUrl.pathname.startsWith('/auth/') && isAuthenticated) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
