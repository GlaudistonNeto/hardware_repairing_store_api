exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.integer('user_id').unsigned().references('id').inTable('users')
    table.integer('order_id').unsigned().references('id').inTable('orders')
    table.string('name')
    table.decimal('price', 8, 2)
    table.timestamp('created_at', { useTz: true }).notNullable().defaultTo(this.now())
    table.timestamp('updated_at', { useTz: true }).notNullable().defaultTo(this.now())
  })
};

exports.down = function (knex, Promise) {
  this.schema.dropTable(this.tableName)
};
