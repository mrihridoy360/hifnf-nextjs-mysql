// Test script for MySQL connection
const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

async function testConnection() {
  console.log('Testing MySQL connection...');
  console.log('Host:', process.env.MYSQL_HOST);
  console.log('Port:', process.env.MYSQL_PORT || 3306);
  console.log('User:', process.env.MYSQL_USER);
  console.log('Database:', process.env.MYSQL_DATABASE);

  // Determine if we're using a remote database
  const isRemoteDatabase = process.env.MYSQL_HOST !== 'localhost';
  console.log('Using remote database:', isRemoteDatabase ? 'Yes' : 'No');

  let connection;

  try {
    // Create connection with SSL for remote databases
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      ...(isRemoteDatabase && {
        ssl: {
          rejectUnauthorized: false // Allow self-signed certificates
        }
      })
    });

    console.log('Connection successful!');

    // Test query
    const [rows] = await connection.execute('SELECT 1 + 1 AS result');
    console.log('Query result:', rows[0].result);

    // Get server info
    const [serverInfo] = await connection.execute('SELECT VERSION() AS version');
    console.log('MySQL version:', serverInfo[0].version);

    // Check if users table exists
    try {
      const [tables] = await connection.execute('SHOW TABLES LIKE "users"');
      if (tables.length > 0) {
        console.log('Users table exists');

        // Count users
        const [userCount] = await connection.execute('SELECT COUNT(*) AS count FROM users');
        console.log('Number of users:', userCount[0].count);
      } else {
        console.log('Users table does not exist. Database may not be initialized.');
      }
    } catch (error) {
      console.error('Error checking tables:', error.message);
    }

  } catch (error) {
    console.error('Connection failed:', error.message);
    if (error.message.includes('SSL')) {
      console.log('\nSSL Error: Your database might require SSL configuration.');
      console.log('Try modifying the connection to include SSL options.');
    }
    if (error.message.includes('Access denied')) {
      console.log('\nAccess Denied: Check your username and password.');
    }
    if (error.message.includes('ECONNREFUSED')) {
      console.log('\nConnection Refused: The database server is not accessible.');
      console.log('Check if:');
      console.log('1. The host and port are correct');
      console.log('2. The database server is running');
      console.log('3. Firewall rules allow connections from your IP');
    }
  } finally {
    if (connection) {
      await connection.end();
      console.log('Connection closed');
    }
  }
}

testConnection();
