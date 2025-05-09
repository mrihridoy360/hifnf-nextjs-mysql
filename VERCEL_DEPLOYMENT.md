# Vercel Deployment Guide

This guide provides instructions for deploying the Facebook clone application to Vercel.

## Prerequisites

1. A Vercel account (sign up at [vercel.com](https://vercel.com))
2. Git repository with your project code
3. MySQL database accessible from the internet

## Deployment Steps

### 1. Prepare Your Database

Ensure your MySQL database is:
- Accessible from the internet (Vercel needs to connect to it)
- Has all the necessary tables (run the setup script locally first)
- Has proper credentials and permissions

### 2. Connect Your Repository to Vercel

1. Log in to your Vercel account
2. Click "Add New" → "Project"
3. Import your Git repository
4. Configure the project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`

### 3. Configure Environment Variables

Add the following environment variables in the Vercel project settings:

```
MYSQL_HOST=your-mysql-host
MYSQL_PORT=3306
MYSQL_USER=your-mysql-user
MYSQL_PASSWORD=your-mysql-password
MYSQL_DATABASE=your-mysql-database
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://your-vercel-domain.vercel.app
```

### 4. Deploy

1. Click "Deploy"
2. Wait for the build to complete
3. Your application should now be live at the Vercel URL

## Troubleshooting

### Database Connection Issues

If you encounter database connection issues:
- Ensure your database allows connections from Vercel's IP ranges
- Check that your database credentials are correct
- Verify that the database exists and has the correct tables

### Authentication Issues

If authentication doesn't work:
- Make sure NEXTAUTH_URL is set correctly
- Ensure NEXTAUTH_SECRET is properly configured
- Check that cookies are being set correctly

### Image Upload Issues

For image uploads to work:
- Configure Vercel to use persistent storage or
- Use an external storage service like AWS S3

## Monitoring and Logs

- Monitor your application using Vercel's dashboard
- Check logs for any errors or issues
- Use Vercel Analytics to track performance

## Custom Domain

To use a custom domain:
1. Go to your project settings in Vercel
2. Click on "Domains"
3. Add your custom domain
4. Follow the instructions to configure DNS settings
