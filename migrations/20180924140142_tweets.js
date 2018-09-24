exports.up = knex => knex.schema.createTable('tweets', table => {
  table.increments('id').primary()
  table.string('tweet')
  table.string('user_id')
})

exports.down = knex => knex.schema.dropTable('tweets')
