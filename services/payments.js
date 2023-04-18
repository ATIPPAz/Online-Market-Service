const Payment = require('../models/payments')
module.exports = {
  async getPaymentAll() {
    return await Payment.find().select('')
  },
  async getPaymentOne(id) {
    return await Payment.findOne({ _id: id }).select('')
  },
}
