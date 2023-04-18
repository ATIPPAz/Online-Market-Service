const Account = require('../models/accounts')
module.exports = {
  async getAccountAll() {
    return await Account.find().select('')
  },
  async getAccountOne(id) {
    return await Account.findOne({ _id: id }).select('')
  },
}
