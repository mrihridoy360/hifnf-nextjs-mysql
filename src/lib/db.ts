import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '',
  database: process.env.MYSQL_DATABASE || 'facebook_clone',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export async function executeQuery<T>({ query, values }: { query: string; values?: any[] }): Promise<T> {
  try {
    // If values is empty or undefined, use query directly
    if (!values || values.length === 0) {
      const [rows] = await pool.query(query);
      return rows as T;
    }

    // Otherwise use prepared statement
    const [rows] = await pool.execute(query, values);
    return rows as T;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
}

export default pool;
