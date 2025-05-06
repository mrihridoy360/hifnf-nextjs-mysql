# Memory Optimization Guide for gaanlagbe.com

This guide provides instructions for optimizing memory usage for the Facebook clone application on cPanel.

## Memory Allocation

The application is configured to use 1GB of RAM as requested, with the following memory allocations:

- **Node.js Heap Memory**: 1024MB (1GB)
- **Initial Heap Size**: 512MB
- **Semi-Space Size**: 128MB
- **WebAssembly Memory**: 512MB

These settings are configured in:
- `ecosystem.config.js`
- `express-server.js`
- `package.json` scripts

## Deployment Process

To deploy the application with optimized memory settings:

1. Run the deployment script:
   ```bash
   ./deploy.sh
   ```

   This script will:
   - Clean previous build
   - Set proper environment variables
   - Build the application with optimized settings
   - Start the application with PM2

2. Alternatively, you can run the commands manually:
   ```bash
   # Clean previous build
   npm run clean

   # Build with optimized memory settings
   npm run build

   # Start with PM2
   pm2 start ecosystem.config.js --env production
   ```

## Monitoring Memory Usage

To monitor memory usage:

1. Check PM2 status:
   ```bash
   pm2 status
   ```

2. View detailed memory usage:
   ```bash
   pm2 monit
   ```

3. Check application logs:
   ```bash
   pm2 logs gaanlagbe
   ```

## Troubleshooting Memory Issues

If you encounter memory issues:

1. **Out of memory: wasm memory** error:
   - This indicates WebAssembly is running out of memory
   - Increase the `--wasm-memory-size-mb` value in NODE_OPTIONS

2. **JavaScript heap out of memory** error:
   - Increase the `--max-old-space-size` value in NODE_OPTIONS

3. **General performance issues**:
   - Reduce the number of concurrent users
   - Optimize database queries
   - Implement caching for frequently accessed data

## cPanel Configuration

For optimal performance on cPanel:

1. Allocate at least 1GB of RAM to the application
2. Set up proper process management with PM2
3. Configure Apache to proxy requests to the Node.js application (already done in .htaccess)
4. Enable compression and caching (already configured in .htaccess)

## Contact Support

If you continue to experience memory issues after following this guide, please contact support for further assistance.
