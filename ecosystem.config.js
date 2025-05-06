module.exports = {
  apps: [
    {
      name: 'gaanlagbe',
      script: 'express-server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=1024 --initial-heap-size=512 --max-semi-space-size=128 --wasm-memory-size-mb=512'
      },
      env_production: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--max-old-space-size=1024 --initial-heap-size=512 --max-semi-space-size=128 --wasm-memory-size-mb=512'
      }
    }
  ]
};
