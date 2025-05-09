# Facebook Clone - Vercel Deployment

This project has been configured for deployment on Vercel. Follow these steps to deploy your application.

## Prerequisites

- A Vercel account
- MySQL database accessible from the internet
- Node.js and npm installed locally

## Deployment Steps

### 1. Prepare Your Project

Make sure your code is ready for deployment:

1. Your API routes are properly implemented
2. Your database connection is configured correctly
3. All environment variables are set up

You can test your build locally with:

```bash
npm run build
```

### 2. Deploy to Vercel

You can deploy to Vercel in two ways:

#### Option 1: Using Vercel CLI

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

#### Option 2: Using Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Log in to your Vercel account
3. Click "Import Project"
4. Select your repository
5. Configure the project settings
6. Click "Deploy"

### 3. Configure Environment Variables

Make sure to set the following environment variables in your Vercel project settings:

- `MYSQL_HOST`: Your MySQL host
- `MYSQL_PORT`: Your MySQL port (usually 3306)
- `MYSQL_USER`: Your MySQL username
- `MYSQL_PASSWORD`: Your MySQL password
- `MYSQL_DATABASE`: Your MySQL database name
- `NEXTAUTH_SECRET`: A secret key for NextAuth
- `NEXTAUTH_URL`: Your Vercel deployment URL

### 4. Set Up Your Database

Ensure your MySQL database is:
- Accessible from Vercel's servers
- Has all the necessary tables (run the setup script locally first)

## Troubleshooting

If you encounter issues with your deployment:

1. Check Vercel logs for error messages
2. Ensure your database is accessible from Vercel
3. Verify that all environment variables are set correctly
4. Check that your database schema is properly set up

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- [NextAuth.js Documentation](https://next-auth.js.org/)
