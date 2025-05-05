const mysql = require('mysql2/promise');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables from .env.local
dotenv.config({ path: '.env.local' });

async function setupDatabase() {
  let connection;

  try {
    console.log('Starting database setup...');

    // Connect to MySQL server (without database)
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER || 'root',
      password: process.env.MYSQL_PASSWORD || '',
    });

    console.log('Connected to MySQL server');

    // Create database if it doesn't exist
    const dbName = process.env.MYSQL_DATABASE || 'facebook_clone';
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
    console.log(`Database '${dbName}' created or already exists`);

    // Use the database
    await connection.query(`USE ${dbName}`);
    console.log(`Using database '${dbName}'`);

    // Read schema file
    const schemaPath = path.join(__dirname, 'src', 'lib', 'schema.sql');
    console.log(`Reading schema from ${schemaPath}`);

    if (!fs.existsSync(schemaPath)) {
      console.error(`Schema file not found at ${schemaPath}`);
      return;
    }

    const schema = fs.readFileSync(schemaPath, 'utf8');

    // Split the schema into individual statements
    const statements = schema
      .split(';')
      .filter(statement => statement.trim() !== '')
      .map(statement => statement + ';');

    console.log(`Found ${statements.length} SQL statements to execute`);

    // Execute each statement
    for (let i = 0; i < statements.length; i++) {
      const statement = statements[i];
      try {
        await connection.query(statement);
        console.log(`Executed statement ${i + 1}/${statements.length}`);
      } catch (error) {
        console.error(`Error executing statement ${i + 1}:`, error.message);
        console.error('Statement:', statement);
      }
    }

    console.log('Database schema initialized successfully');

    // Create test user if it doesn't exist
    const [existingUsers] = await connection.query(
      'SELECT * FROM users WHERE email = ?',
      ['test@example.com']
    );

    if (existingUsers.length === 0) {
      console.log('Creating test user...');

      // Create test user
      const userId = uuidv4();
      const hashedPassword = await bcrypt.hash('password123', 10);

      await connection.query(
        `INSERT INTO users (
          id, username, email, password, first_name, last_name, date_of_birth
        ) VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [userId, 'testuser', 'test@example.com', hashedPassword, 'Test', 'User', '1990-01-01']
      );

      console.log('Test user created successfully');
      console.log('Email: test@example.com');
      console.log('Password: password123');
    } else {
      console.log('Test user already exists');
    }

    // Create upload directories
    const uploadDir = process.env.UPLOAD_DIR || 'public/uploads';
    const imagesDir = path.join(uploadDir, 'images');
    const videosDir = path.join(uploadDir, 'videos');

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    if (!fs.existsSync(videosDir)) {
      fs.mkdirSync(videosDir, { recursive: true });
    }

    console.log('Upload directories created');
    console.log('Database setup completed successfully');

  } catch (error) {
    console.error('Error setting up database:', error);
  } finally {
    if (connection) {
      await connection.end();
      console.log('Database connection closed');
    }
  }
}

setupDatabase();
