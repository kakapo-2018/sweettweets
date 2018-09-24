const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const knex = require('knex')(config)

const crypto = require('./crypto')

module.exports = {
  create,
  exists,
  getById,
  getByName
}

function create(user_name, password, testDb) {
  const hash = crypto.getHash(password)
  const connection = testDb || knex

  return connection('users')
    .insert({
      user_name: user_name,
      hash: hash
    })
}

function exists(user_name, testDb) {
  const connection = testDb || knex
  return connection('users')
    .count('id as n')
    .where('user_name', user_name)
    .then(count => {
      return count[0].n > 0
    })
}

function getById(id, testDb) {
  const connection = testDb || knex
  return connection('users')
    .select('id', 'user_name')
    .where('id', id)
    .first()
}

function getByName(user_name, testDb) {
  const connection = testDb || knex
  return connection('users')
    .select()
    .where('user_name', user_name)
    .first()
}
