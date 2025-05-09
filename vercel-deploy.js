#!/usr/bin/env node

/**
 * This script helps prepare the project for Vercel deployment
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('Preparing project for Vercel deployment...');

// Clean previous builds
try {
  console.log('Cleaning previous builds...');
  if (fs.existsSync('.next')) {
    fs.rmSync('.next', { recursive: true, force: true });
  }
  console.log('Previous builds cleaned successfully.');
} catch (error) {
  console.error('Error cleaning previous builds:', error);
}

// Check if vercel.json exists
if (!fs.existsSync('vercel.json')) {
  console.error('vercel.json not found. Please create it first.');
  process.exit(1);
}

// Check if .env.production exists
if (!fs.existsSync('.env.production')) {
  console.error('.env.production not found. Please create it first.');
  process.exit(1);
}

// Run build
try {
  console.log('Building project...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully.');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}

console.log('\nProject is ready for Vercel deployment!');
console.log('\nImportant notes for Vercel deployment:');
console.log('1. Your project uses API routes which require a serverless deployment');
console.log('2. Make sure your MySQL database is accessible from Vercel');
console.log('3. Set all environment variables in the Vercel dashboard');
console.log('\nNext steps:');
console.log('1. Install Vercel CLI: npm i -g vercel');
console.log('2. Login to Vercel: vercel login');
console.log('3. Deploy to Vercel: vercel');
console.log('\nOr deploy directly from the Vercel dashboard.');
