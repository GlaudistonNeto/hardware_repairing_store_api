/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) =>{
    table.increments('id').primary();
    table.string('name', 150).nullable();
    table.string('phone', 50).notNullable().unique();
    table.string('email', 200).notNullable().unique();
    table.string('password_hash', 200).notNullable().unique();
    table.timestamp('created_at', { useTz: true }).notNullable();
    table.timestamp('updated_at', { useTz: true }).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
