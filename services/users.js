const User = require('../models/users')
module.exports = {
  async getUserAll() {
    return await User.find().select('-password')
  },
  async getUserOne(param) {
    const user = await User.findOne(param).select('-password')
    return user
  },
  async createUser(data) {
    console.log(data)
    await User.create({ ...data }, (err, res) => {
      if (err) return err
      return res
    })
  },
}
