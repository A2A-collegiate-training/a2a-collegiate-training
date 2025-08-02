/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Purchase", (table) => {
    table.increments("id").primary();
    table.integer("user_id").references("id").inTable("User").onDelete("CASCADE");
    table.integer("athlete_id").references("id").inTable("User").onDelete("CASCADE");
    table.integer("video_id").references("id").inTable("Video").onDelete("CASCADE");
    table.timestamp("purchase_date");
    //proof of payment/payment id??
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Purchase");
};
