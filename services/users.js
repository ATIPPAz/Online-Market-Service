const User = require('../models/users')
module.exports = {
  async getUserAll() {
    return await User.find().select('-password')
  },
  async getUserOne(param) {
    const user = await User.findOne(param).select('-password')
    return user
  },
  async createUser({
    firstName,
    lastName,
    phone,
    email,
    username,
    address,
    age,
    password,
  }) {
    const newUser = new User({
      firstName,
      lastName,
      phone,
      email,
      username,
      address,
      age,
      password,
    })
    await newUser.save()
    return newUser
  },
}
