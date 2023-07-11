exports.up = function (knex, Promise) {
  return knex.schema.createTable('api_tokens', table => {
    table.increments('id').primary()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.string('token', 64).notNullable()
  })
};

exports.down = function (knex, Promise) {
  this.schema.dropTable(this.tableName)
};
