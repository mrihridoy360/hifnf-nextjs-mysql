#!/bin/bash

# Deployment script for gaanlagbe.com Facebook clone

echo "Starting deployment process..."

# Clean previous build
echo "Cleaning previous build..."
npm run clean

# Set environment variables for production
echo "Setting up production environment..."
export NODE_ENV=production
export NODE_OPTIONS="--max-old-space-size=1024 --initial-heap-size=512 --max-semi-space-size=128 --wasm-memory-size-mb=512"

# Build the application
echo "Building application..."
npm run build

# Check if build was successful
if [ ! -f ".next/BUILD_ID" ]; then
  echo "Build failed! BUILD_ID file not found."
  exit 1
fi

echo "Build completed successfully!"

# Start the application with PM2
echo "Starting application with PM2..."
pm2 delete gaanlagbe 2>/dev/null || true
pm2 start ecosystem.config.js --env production

# Check if application started successfully
if [ $? -eq 0 ]; then
  echo "Application started successfully!"
  echo "You can check the logs with: pm2 logs gaanlagbe"
else
  echo "Failed to start application with PM2."
  exit 1
fi

echo "Deployment completed successfully!"
