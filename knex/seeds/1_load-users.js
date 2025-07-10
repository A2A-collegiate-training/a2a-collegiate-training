const fs = require("fs");

exports.seed = function (knex) {
  const contents = fs.readFileSync("./data/user-seed.json");
  const data = JSON.parse(contents);

  // Deletes ALL existing entries
  // Use batch insert because we have too many users for simple insert
  return knex("User").del()
    .then(() => knex.batchInsert("User", data, 100));
};