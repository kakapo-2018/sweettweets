exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('profiles').insert([
        {
          year: '1999',
          city_id: '1',
          status: 'staff',
          user_id: '1',
        },
        {
          year: '2015',
          city_id: '2',
          status: 'student',
          user_id: '3',
        },
        {
          year: '2018',
          city_id: '1',
          status: 'student',
          user_id: '2',
        },
        {
          year: '2015',
          city_id: '2',
          status: 'student',
          user_id: '1',
        },
        {
          year: '1974',
          city_id: '1',
          status: 'staff',
          user_id: '4',
        }
      ]);
    });
};