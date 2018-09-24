exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tweets').del()
    .then(function () {
      // Inserts seed entries
      return knex('tweets').insert([
        {
          tweet: 'tweet tweet tweet',
          user_id: '1',
        },
        {
          tweet: 'meep meep meep',
          user_id: '1',
        },
        {
          tweet: 'beep beep beep',
          user_id: '1',
        },
        {
          tweet: 'Wise advice',
          user_id: '2',
        }
      ]);
    });
};