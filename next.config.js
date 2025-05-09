/** @type {import('next').NextConfig} */
const nextConfig = {
  // Using default output mode for Vercel deployment to support API routes
  images: {
    domains: ['via.placeholder.com', 'localhost', 'gaanlagbe.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'gaanlagbe.com',
        pathname: '/uploads/**',
      },
    ],
    unoptimized: true,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  // Memory optimization settings for Vercel
  experimental: {
    // Optimize memory usage
    optimizePackageImports: ['react-icons', '@heroicons/react'],
  },
  // Reduce memory usage during runtime
  reactStrictMode: false,
  // Minimize output size
  compress: true,
};

module.exports = nextConfig;
