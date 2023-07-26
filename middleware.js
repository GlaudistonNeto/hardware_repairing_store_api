const knex = require('knex');
const config = require('./knexfile');

// Determine the environment (development, staging, production) based on NODE_ENV
const environment = process.env.NODE_ENV || 'development';
const db = knex(config[environment]);

module.exports = db;
