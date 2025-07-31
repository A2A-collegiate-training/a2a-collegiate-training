const fs = require("fs");

exports.seed = function (knex) {
  const contents = fs.readFileSync("./data/subscription_plan-seed.json");
  const data = JSON.parse(contents);

  // Deletes ALL existing entries
  // Use batch insert because we have too many users for simple insert
  return knex("Subscription_Plan").del()
    .then(() => knex.batchInsert("Subscription_Plan", data, 100));
};