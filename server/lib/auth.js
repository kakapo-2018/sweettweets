const jwt = require('jsonwebtoken')

const users = require('./users')

function createToken(user, secret) {
  return jwt.sign({
    id: user.id,
    user_name: user.user_name
  }, secret, {
      expiresIn: 60 * 60 * 24 // or '1d'
    })
}

function handleError(err, req, res, next) {
  if (err) {
    return res.status(403).json({
      message: 'Access to this resource was denied.',
      error: err.message
    })
  }
  next()
}

function issueJwt(req, res, next) {
  console.log('issueJwt')
  users.getByName(req.body.user_name)
    .then(user => {
      const token = createToken(user, process.env.JWT_SECRET)
      res.json({
        message: 'Authentication successful.',
        token
      })
    })
    .catch(err => {
      return res.status(403).json({
        message: 'Authentication failed.',
        info: err.message
      })
    })
}

module.exports = {
  handleError,
  issueJwt
}
