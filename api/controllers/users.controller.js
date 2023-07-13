const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { getUserAll, getUserOne, createUser } = require('../services/users')
module.exports = {
  async getUserWithJwt(req, res) {
    try {
      const user = await getUserOne({ _id: req.user.userId })
      console.log(user)
      res.json({
        status: 409,
        data: {
          address: user.address,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          _id: user._id,
          phone: user.phone,
        },
      })
    } catch (err) {
      res.json({
        status: 500,
        massage: err.massage,
      })
    }
  },
  async registerUser(req, res) {
    try {
      const { firstName, lastName, phone, email, password, username, address } =
        await req.body
      const user = await getUserOne({ $or: [{ username }, { email }] })
      if (user) {
        return res
          .status(409)
          .json({ status: 409, message: 'User already exists' })
      }

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)
      const newUser = createUser({
        firstName,
        lastName,
        phone,
        email,
        username,
        address,
        password: hashedPassword,
      })
      const token = jwt.sign(
        { userId: newUser._id, email: newUser.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      )
      res
        .status(201)
        .json({ status: 201, data: { message: 'User created', token } })
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message })
    }
  },
  async login(req, res) {
    try {
      const { username, password } = await req.body
      const user = await getUserOne({ username })
      console.log(user)
      if (!user) {
        return res.status(401).json({ message: 'Invalid username' })
      }
      const isPasswordMatch = await bcrypt.compare(password, user.password)
      if (!isPasswordMatch) {
        return res.status(401).json({ message: 'Invalid password' })
      }
      const payload = { userId: user._id, email: user.email }

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: '24h' },
        (err, token) => {
          if (err) throw err
          res.json({ status: 200, data: { token } })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).json({ status: 500, message: 'Server Error' })
    }
  },
}
