const Account = require('../models/accounts')
module.exports = {
  async getAccountAll() {
    return await Account.find().select('')
  },
  async getAccountOne(param) {
    return await Account.findOne({ ...param }).select('')
  },
  async update(id, payload) {
    return await Account.updateOne(
      { accountId: id },
      { $set: { ...payload } },
      (err, res) => {
        if (err) {
          return err
        }
        return res
      }
    )
  },
}
