const fs = require("fs");

exports.seed = function (knex) {
  const contents = fs.readFileSync("./data/athlete-seed.json");
  const data = JSON.parse(contents);

  // Deletes ALL existing entries
  // Use batch insert because we have too many athletes for simple insert
  return knex("Athlete").del()
    .then(() => knex.batchInsert("Athlete", data, 100));
};