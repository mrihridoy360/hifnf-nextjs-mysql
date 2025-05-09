import mysql from 'mysql2/promise';

// Determine if we're using a remote database
const isRemoteDatabase = process.env.MYSQL_HOST !== 'localhost';

// Create a connection pool with SSL support for remote databases
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'facebook_clone',
  port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // Add SSL configuration for remote databases
  ...(isRemoteDatabase && {
    ssl: {
      rejectUnauthorized: false // Allow self-signed certificates
    }
  })
});

export async function executeQuery<T>({ query, values }: { query: string; values?: any[] }): Promise<T> {
  try {
    console.log('Executing query:', query);
    console.log('Query values:', values);

    // If values is empty or undefined, use query directly
    if (!values || values.length === 0) {
      console.log('Executing query without values');
      const [rows] = await pool.query(query);
      console.log('Query result rows:', Array.isArray(rows) ? rows.length : 'Not an array');
      return rows as T;
    }

    // Otherwise use prepared statement
    console.log('Executing prepared statement with values');
    const [rows] = await pool.execute(query, values);
    console.log('Query result rows:', Array.isArray(rows) ? rows.length : 'Not an array');
    return rows as T;
  } catch (error) {
    console.error('Database query error:', error);
    // Log more detailed error information
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    throw error;
  }
}

export default pool;
