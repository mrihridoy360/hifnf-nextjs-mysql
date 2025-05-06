/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
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
  // Domain configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? 'https://gaanlagbe.com' : '',
  basePath: '',
  crossOrigin: 'anonymous',
  // Memory optimization settings
  experimental: {
    // Disable JIT compilation to reduce memory usage
    forceSwcTransforms: true,
    // Optimize memory usage
    optimizePackageImports: ['react-icons', '@heroicons/react'],
    // Reduce memory usage during build
    webpackBuildWorker: false,
  },
  // Reduce memory usage during runtime
  reactStrictMode: false,
  // Minimize output size
  compress: true,
};

module.exports = nextConfig;
