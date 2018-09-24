const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = {
  saveTweet
};

function saveTweet(tweet, id, testDb) {
  const connection = testDb || knex;
  return connection("tweets").insert({
    tweet: tweet,
    user_id: id
  });
}
