const { hashSync } = require('bcrypt')
const saltRounds = 10

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          user_name: 'bob',
          cohort: '1',
          hash: hashSync('bob', saltRounds)
        },
        {
          id: 2,
          user_name: 'john',
          cohort: '2',
          hash: hashSync('john', saltRounds)
        },
        {
          id: 3,
          user_name: 'maurice',
          cohort: '2',
          hash: hashSync('123', saltRounds)
        }
      ]);
    });
};