/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("Subscription_Purchase", (table) => {
    table.increments("id").primary();
    table.integer("athlete_id").references("id").inTable("User").onDelete("CASCADE");
    table.integer("user_id").references("id").inTable("User").onDelete("CASCADE");
    table.integer("subscription_plan_id").references("id").inTable("Subscription_Plan").onDelete("CASCADE");
    table.timestamp("purchase_date");
    //Proof of payment/payment id?
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("Subscription_Purchase");
};
