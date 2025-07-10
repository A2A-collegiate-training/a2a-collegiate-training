/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Athlete", (table) => {
    table.increments("id").primary();
    table.string("first_name");
    table.string("last_name");
    table.text("email");
    table.string("sport");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Athlete");
};
