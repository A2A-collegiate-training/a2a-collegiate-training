const fs = require("fs");

exports.seed = function (knex) {
  const contents = fs.readFileSync("./data/subscription-seed.json");
  const data = JSON.parse(contents);

  // Deletes ALL existing entries
  // Use batch insert because we have too many subscriptions for simple insert
  return knex("Subscription").del()
    .then(() => knex.batchInsert("Subscription", data, 100));
};
