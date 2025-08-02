/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("User", (table) => {
    table.increments("id").primary();
    table.integer("google_id");
    table.string("first_name");
    table.string("last_name");
    table.text("email");
    table.boolean("athlete");
    table.string("sport");
    table.string("position");
    table.boolean("subscription");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("User");
};