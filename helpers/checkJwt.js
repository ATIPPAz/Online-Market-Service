const jwt = require('jsonwebtoken')
const checkToken = (req, res, next) => {
  if (!req.header('Authorization')) {
    return res.status(401).json({ status: 401, error: 'please login' })
  }
  const token = req.header('Authorization').replace('Bearer ', '')

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(401).json({ status: 401, error: 'Invalid token' })
      } else {
        req.user = decoded
        next()
      }
    })
  } else {
    return res.status(401).json({ status: 401, error: 'Invalid token' })
  }
}

module.exports = checkToken
