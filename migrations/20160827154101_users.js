exports.up = knex => knex.schema.createTable('users', table => {
  table.increments('id').primary()
  table.string('user_name')
  table.string('cohort')
  table.binary('hash')
})

exports.down = knex => knex.schema.dropTable('users')
