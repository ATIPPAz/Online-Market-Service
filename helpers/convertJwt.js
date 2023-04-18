const jwt = require('jsonwebtoken')

function convertJwt(req, res, next) {
  const token = req.header('Authorization').replace('Bearer ', '')
  console.log(token)
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).send({ error: 'Invalid token' })
  }
}
// console.log(req.user)
// const user = await getUserOne({ _id: req.user.userId })
// console.log(user)
module.exports = convertJwt
