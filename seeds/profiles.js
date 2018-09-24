exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          year: '1999',
          city_id: '1',
          status: '1',
          user_id: '1',
        },
        {
          year: '2015',
          city_id: '2',
          status: '1',
          user_id: '3',
        },
        {
          year: '2018',
          city_id: '1',
          status: '2',
          user_id: '2',
        },
        {
          year: '2015',
          city_id: '2',
          status: '2',
          user_id: '1',
        },
        {
          year: '1974',
          city_id: '1',
          status: '2',
          user_id: '4',
        }
      ]);
    });
};