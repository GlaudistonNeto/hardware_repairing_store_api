exports.up = function (knex, Promise) {
  return knex.schema.createTable('services', table => {
    table.increments('id').primary()
      table.string('name').notNullable()
      table.string('phone').notNullable()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.timestamps(true)
  })
};

exports.down = function (knex, Promise) {
  this.schema.dropTable(this.tableName)
};
