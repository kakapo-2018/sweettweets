const environment = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[environment];
const knex = require("knex")(config);

module.exports = {
  saveTweet,
  getTweets,
  updateTweet,
  delTweet
};

function saveTweet(tweet, id, testDb) {
  const connection = testDb || knex;
  return connection("tweets").insert({
    tweet: tweet,
    user_id: id
  });
}

function getTweets(testDb) {
  const connection = testDb || knex;
  return connection("tweets").select();
}

function updateTweet(tweet, id, testDb) {
  const connection = testDb || knex;
  return connection("tweets")
    .where('id', id)
    .update({
      tweet: tweet,
    });
}

function delTweet(id, testDb) {
  const connection = testDb || knex;
  return connection("tweets")
    .where('id', id)
    .delete()
}