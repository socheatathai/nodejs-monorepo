import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const createDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '',
    });

    console.log('✓ Connected to MySQL');
    
    await connection.execute(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME || 'upload_db'}`);
    console.log(`✓ Database '${process.env.DB_NAME || 'upload_db'}' created or already exists`);
    
    await connection.end();
    console.log('✓ Setup complete!');
    process.exit(0);
  } catch (error) {
    console.error('✗ Error setting up database:', error.message);
    process.exit(1);
  }
};

createDatabase();
