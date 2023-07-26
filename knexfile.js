require('dotenv').config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

test: {
  client: 'mysql2',
    connection: {
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DB_NAME,
      user: process.env.MYSQL_USER,
      port: process.env.MYSQL_PORT,
      password:process.env.MYSQL_PASSWORD
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds'
    },
},

  development: {
    client: 'mysql2',
    connection: {
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DB_NAME,
      user: process.env.MYSQL_USER,
      port: process.env.MYSQL_PORT,
      password:process.env.MYSQL_PASSWORD
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  staging: {
    client: 'mysql2',
    connection: {
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DB_NAME,
      user: process.env.MYSQL_USER,
      port: process.env.MYSQL_PORT,
      password:process.env.MYSQL_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  },

  production: {
    client: 'mysql2',
    connection: {
      host: process.env.MYSQL_HOST,
      database: process.env.MYSQL_DB_NAME,
      user: process.env.MYSQL_USER,
      port: process.env.MYSQL_PORT,
      password:process.env.MYSQL_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }

};
