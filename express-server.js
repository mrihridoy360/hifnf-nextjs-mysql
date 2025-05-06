const express = require('express');
const next = require('next');
const path = require('path');
const compression = require('compression');

// Set memory limit for Node.js process
if (!process.env.NODE_OPTIONS) {
  process.env.NODE_OPTIONS = '--max-old-space-size=1024 --initial-heap-size=512 --max-semi-space-size=128 --wasm-memory-size-mb=512';
}

// Optimize memory usage
process.env.NODE_ENV = 'production'; // Ensure production mode
process.env.NEXT_TELEMETRY_DISABLED = '1'; // Disable telemetry

// Enable garbage collection
if (global.gc) {
  console.log('Garbage collection is available');
  // Run garbage collection every 30 seconds
  setInterval(() => {
    try {
      global.gc();
      console.log('Garbage collection completed');
    } catch (e) {
      console.error('Garbage collection failed:', e);
    }
  }, 30000);
} else {
  console.log('Garbage collection is not available. Run with --expose-gc flag');
}

const dev = process.env.NODE_ENV !== 'production';
const hostname = dev ? 'localhost' : '0.0.0.0';
const port = parseInt(process.env.PORT || '3000', 10);

// Initialize Next.js
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// Log memory usage
console.log(`Memory usage at startup: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`);
console.log(`Memory limit: ${process.env.NODE_OPTIONS}`);

app.prepare().then(() => {
  const server = express();

  // Enable compression
  server.use(compression());

  // Set CORS headers
  server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://gaanlagbe.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
      res.sendStatus(204);
      return;
    }
    next();
  });

  // Serve static files
  server.use('/uploads', express.static(path.join(__dirname, 'public', 'uploads')));

  // Handle all other routes with Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start server
  server.listen(port, hostname, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
    console.log(`> Production domain: https://gaanlagbe.com`);
  });
});
