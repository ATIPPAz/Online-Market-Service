const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PaymentSchema = new Schema({
  userId: {
    type: String,
  },
  accountId: {
    type: String,
  },
})

const Payment = mongoose.model('payments', PaymentSchema)
module.exports = Payment
