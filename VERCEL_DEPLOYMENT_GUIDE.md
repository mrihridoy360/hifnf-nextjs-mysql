# Vercel Deployment Guide for Facebook Clone

This guide provides comprehensive instructions for deploying your Facebook clone application to Vercel.

## Changes Made for Vercel Deployment

We've made the following changes to prepare your application for Vercel:

1. **Next.js Configuration**
   - Updated `next.config.js` to support API routes
   - Removed custom server-specific settings

2. **Vercel Configuration**
   - Added `vercel.json` with deployment settings
   - Configured environment variables

3. **Package Configuration**
   - Updated build and start scripts in `package.json`
   - Added deployment helper scripts

4. **Environment Variables**
   - Updated `.env.production` to use Vercel environment variables
   - Set up placeholders for Vercel environment injection

5. **Authentication Updates**
   - Modified NextAuth configuration for Vercel compatibility

## Deployment Steps

### 1. Prepare Your Database

Your application uses MySQL, which needs to be accessible from Vercel's servers:

1. Ensure your MySQL database is accessible from the internet
2. Set up proper firewall rules to allow connections from Vercel
3. Make sure your database has all the necessary tables (run the setup script locally first)

### 2. Deploy to Vercel

#### Option 1: Using Vercel Dashboard (Recommended)

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Vercel account at [vercel.com](https://vercel.com)
3. Click "Add New" → "Project"
4. Select your repository
5. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
6. Set up environment variables (see below)
7. Click "Deploy"

#### Option 2: Using Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy your project:
   ```bash
   vercel
   ```

4. Follow the prompts to complete the deployment.

### 3. Configure Environment Variables

Set the following environment variables in your Vercel project settings:

```
MYSQL_HOST=your-mysql-host
MYSQL_PORT=3306
MYSQL_USER=your-mysql-user
MYSQL_PASSWORD=your-mysql-password
MYSQL_DATABASE=your-mysql-database
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://your-vercel-domain.vercel.app
NEXT_PUBLIC_BASE_URL=https://your-vercel-domain.vercel.app
UPLOAD_DIR=public/uploads
```

### 4. Handling File Uploads

Vercel has an ephemeral filesystem, which means files uploaded to the server won't persist between deployments or even between function invocations. For file uploads to work properly, you have two options:

1. **Use an external storage service** (recommended):
   - Set up an AWS S3 bucket or similar cloud storage
   - Modify your upload code to store files in the cloud
   - Update your image URLs to point to the cloud storage

2. **Use Vercel Blob Storage**:
   - Vercel offers a built-in blob storage solution
   - Install the @vercel/blob package
   - Update your upload code to use Vercel Blob

## Troubleshooting

### Database Connection Issues

If you encounter database connection issues:
- Check that your database allows connections from Vercel's IP ranges
- Verify your database credentials are correct
- Ensure your database server is running and accessible

### API Routes Not Working

If your API routes aren't working:
- Check the Vercel deployment logs for errors
- Ensure your database connection is properly configured
- Verify that your environment variables are set correctly

### Authentication Problems

If users can't log in:
- Make sure NEXTAUTH_URL is set to your Vercel deployment URL
- Check that NEXTAUTH_SECRET is properly configured
- Verify that your database tables for authentication are set up correctly

## Monitoring Your Deployment

Vercel provides several tools to monitor your deployment:

1. **Deployment Logs**: View build and runtime logs
2. **Analytics**: Monitor performance and usage
3. **Status**: Check the health of your deployment

## Updating Your Deployment

To update your deployment:

1. Push changes to your Git repository
2. Vercel will automatically rebuild and deploy your application
3. Check the deployment logs for any issues

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [NextAuth.js Documentation](https://next-auth.js.org/)
