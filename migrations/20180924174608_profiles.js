exports.up = knex => knex.schema.createTable('profiles', table => {
  table.increments('id').primary()
  table.string('year')
  table.string('city_id')
  table.string('status')
  table.string('user_id')
})

exports.down = knex => knex.schema.dropTable('profiles')
