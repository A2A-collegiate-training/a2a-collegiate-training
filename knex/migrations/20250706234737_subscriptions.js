/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Subscription", (table) => {
    table.integer("user_id").unsigned().references("id").inTable("User").onDelete("CASCADE");
    table.integer("athlete_id").unsigned().references("id").inTable("Athlete").onDelete("CASCADE");
    table.primary(["user_id", "athlete_id"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Subscription");
};