# cPanel Deployment Guide for Next.js Application

This guide provides instructions for deploying this Next.js application to a cPanel hosting environment.

## Prerequisites

- cPanel hosting account with Node.js support
- SSH access to your cPanel account (recommended)
- Git installed on your local machine

## Preparation Steps

1. **Build your application locally**:
   ```bash
   npm run build
   ```

2. **Create a deployment package**:
   - Create a ZIP file containing the following:
     - `package.json` (with bcryptjs instead of bcrypt)
     - `package-lock.json`
     - `.env.production` (make sure it has the correct database credentials)
     - `express-server.js`
     - `next.config.js`
     - `.next/` directory (from your build)
     - `public/` directory
     - Any other necessary files

   - **DO NOT include**:
     - `node_modules/` directory
     - `.git/` directory
     - `.env.local` (contains local development variables)

## Deployment Steps

1. **Upload to cPanel**:
   - Log in to your cPanel account
   - Navigate to File Manager
   - Create a directory for your application (e.g., `new.hifnf.com`)
   - Upload your deployment package to this directory
   - Extract the ZIP file

2. **Install Dependencies**:
   - Connect to your server via SSH or use the Terminal in cPanel
   - Navigate to your application directory
   - Run:
     ```bash
     npm install --production
     ```

3. **Set Up Node.js App**:
   - In cPanel, go to "Setup Node.js App"
   - Create a new Node.js application
   - Set the application path to your directory
   - Set the Application startup file to `express-server.js`
   - Set the Node.js version to a compatible version (14.x or higher)
   - Set Application mode to "Production"
   - Set the environment variables needed by your application

4. **Configure Domain**:
   - In cPanel, go to "Domains" or "Subdomains"
   - Point your domain or subdomain to the directory containing your application

## Troubleshooting

### Memory Issues

If you encounter memory-related errors:

1. **Reduce memory usage**:
   - The application is configured to use minimal memory with `--max-old-space-size=128`
   - Ensure your Node.js app in cPanel has enough allocated memory

2. **Module Installation Issues**:
   - If specific modules fail to install, try installing them individually:
     ```bash
     npm install [module-name]
     ```

3. **Next.js Compatibility Issues**:
   - The application is configured to optimize for compatibility with cPanel hosting
   - JIT compilation is disabled to reduce memory usage
   - If you still encounter issues, contact your hosting provider for assistance

### 503 Errors

If you see 503 errors after deployment:

1. Check the application logs in cPanel
2. Ensure the Node.js application is running
3. Verify that the port configuration is correct
4. Check that the domain is properly configured

## Important Notes

- This application uses `bcryptjs` instead of `bcrypt` to avoid native compilation issues
- The memory settings are optimized for shared hosting environments
- The application is configured to run with an Express.js server for better compatibility with cPanel

## Support

If you continue to experience issues, contact your hosting provider's support team with the specific error messages you're encountering.
