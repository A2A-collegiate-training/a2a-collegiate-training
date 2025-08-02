const fs = require("fs");

exports.seed = function (knex) {
  const contents = fs.readFileSync("./data/video-seed.json");
  const data = JSON.parse(contents);

  // Deletes ALL existing entries
  // Use batch insert because we have too many videos for simple insert
  return knex("Video").del()
    .then(() => knex.batchInsert("Video", data, 100));
};