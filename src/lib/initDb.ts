import fs from 'fs';
import path from 'path';
import pool from './db';

async function initializeDatabase() {
  try {
    // Read the schema file
    const schemaPath = path.join(process.cwd(), 'src', 'lib', 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    // Split the schema into individual statements
    const statements = schema
      .split(';')
      .filter(statement => statement.trim() !== '')
      .map(statement => statement + ';');

    // Execute each statement
    const connection = await pool.getConnection();
    console.log('Connected to database');

    for (const statement of statements) {
      await connection.execute(statement);
    }

    connection.release();
    console.log('Database initialized successfully');
    return true;
  } catch (error) {
    console.error('Error initializing database:', error);
    return false;
  }
}

export default initializeDatabase;
