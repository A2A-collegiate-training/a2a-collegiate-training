/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Video", (table) => {
    table.increments("id").primary();
    table.string("video_url");
    //store a thumbnail?
    table.integer("athlete_id").unsigned().references("id").inTable("Athlete").onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Video");
};