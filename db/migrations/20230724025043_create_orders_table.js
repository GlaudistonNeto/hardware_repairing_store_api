/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('orders', (table) =>{
    table.increments('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.integer('service_id').unsigned().notNullable();
    table.integer('quantity').notNullable();
    table.decimal('total_price', 15, 2).notNullable();
    table.timestamp('created_at', { useTz: true, precision: 6 }).defaultTo(knex.fn.now(6));
    table.timestamp('updated_at', { useTz: true, precision: 6 }).defaultTo(knex.fn.now(6));

    table.foreign('user_id').references('id').inTable('users');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
