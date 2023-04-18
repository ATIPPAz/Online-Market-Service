const mongoose = require('mongoose')
const Schema = mongoose.Schema
const accountSchema = new Schema({
  accountName: {
    type: String,
  },
  accountId: {
    type: String,
  },
  money: {
    type: Number,
  },
})

const Account = mongoose.model('accounts', accountSchema)
module.exports = Account
