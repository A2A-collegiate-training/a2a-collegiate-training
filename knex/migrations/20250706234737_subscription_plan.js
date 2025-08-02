/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Subscription_Plan", (table) => {
    table.increments("id").primary();
    table.integer("athlete_id").references("id").inTable("User").onDelete("CASCADE");
    table.text("description");
    table.double("price");
    table.boolean("active");
    table.timestamp("created_at");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Subscription_Plan");
};