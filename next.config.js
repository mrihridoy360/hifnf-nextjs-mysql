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
    // Reduce memory usage - removing this as it requires critters package
    // optimizeCss: true,
    // Disable JIT compilation to reduce memory usage
    forceSwcTransforms: false,
  },
  // Note: swcMinify option removed as it's not supported in Next.js 15.3.1
  // Reduce memory usage during runtime
  reactStrictMode: false,
};

module.exports = nextConfig;
