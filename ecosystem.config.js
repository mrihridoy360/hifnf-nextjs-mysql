module.exports = {
  apps: [
    {
      name: 'facebook-clone',
      script: 'express-server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=1024'
      },
      env_production: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=1024'
      }
    }
  ]
};
