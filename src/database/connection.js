var knex = require('knex')({
  client: 'mysql2',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'hardware_repairing_store'
  }
});

module.exports = knex
