const jwt = require('jsonwebtoken')

function convertJwt(req, res, next) {
  if (!req.header('Authorization')) {
    return res.status(401).json({ status: 401, error: 'please login' })
  }

  const token = req.header('Authorization').replace('Bearer ', '')
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).send({ status: 401, error: 'Invalid token' })
  }
}
module.exports = convertJwt
