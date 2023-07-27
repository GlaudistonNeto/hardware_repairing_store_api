// knexfile.js
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'tests_db',
    },
    migrations: {
      directory: './db/migrations', // Specify the directory for migrations
    },
  },
};
