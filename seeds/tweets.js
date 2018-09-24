exports.seed = function(knex, Promise) {
  return knex("tweets")
    .del()
    .then(function() {
      return knex("tweets").insert([
        {
          tweet:
            "Set small victories for your code, and build up those victories into something huge.",
          user_id: "1",
          cohort: "1"
        },
        {
          tweet: "input === output",
          user_id: "1",
          cohort: "2"
        },
        {
          tweet: "ceiling insulation tastes better than asbestos",
          user_id: "1",
          cohort: "3"
        },
        {
          tweet: "Review concept on the same day",
          user_id: "2",
          cohort: "1"
        },

        {
          tweet: "Look for the understanding of process over product",
          user_id: "2",
          cohort: "2"
        },
        {
          tweet:
            "tweet of advice: define your weekly hours in the first week and commit throughout. aim for 700-1,000 hours total bootcamp time.",
          user_id: "2",
          cohort: "3"
        },
        {
          tweet: "Do yoga when you can",
          user_id: "3",
          cohort: "1"
        },
        {
          tweet:
            "Flick through the Student Handbook before the week to get familiar with new ideas, review it more thoroughly at the end of the week to hit things home. Have fun!",
          user_id: "3",
          cohort: "2"
        }
      ]);
    });
};
