const Payment = require('../models/payments')
module.exports = {
  async getPaymentAll() {
    return await Payment.find().select('')
  },
  async getPaymentOne(id) {
    return await Payment.findOne({ _id: id }).select('')
  },
  async createPayment(data) {
    Payment.create({ ...data }, (err, res) => {
      if (err) return err
      return res
    })
  },
  async updatePayment(id, data) {
    await Payment.updateOne({ _id: id }, { $set: { ...data } }, (err, res) => {
      if (err) {
        return err
      }
      return res
    })
  },
  async deletePayment(id) {
    await Payment.deleteOne({ _id: id }, (err, res) => {
      if (err) return err
      return res
    })
  },
}
