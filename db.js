// db.js
const knex = require('knex');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

// Extract database configuration from environment variables
const dbConfig = {
  client: 'mysql2',
  connection: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'tests_db',
  },
  debug: process.env.DB_DEBUG === 'true', // Set to true to enable SQL query debugging
};

// Create a new Knex instance
const db = knex(dbConfig);

// Export the Knex instance to be used in other parts of the application
module.exports = db;
