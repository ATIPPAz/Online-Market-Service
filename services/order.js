const Order = require('../models/order')
module.exports = {
  async getOrderAll() {
    return await Order.find().select('')
  },
  async getOrderOne(id) {
    return await Order.findOne({ _id: id }).select('')
  },
  async createOrder(data) {
    Order.create({ ...data }, (err, res) => {
      if (err) return err
      return res
    })
  },
  async updateOrder(id, data) {
    await Order.updateOne({ _id: id }, { $set: { ...data } }, (err, res) => {
      if (err) {
        return err
      }
      return res
    })
  },
  async deleteOrder(id) {
    await Order.deleteOne({ _id: id }, (err, res) => {
      if (err) return err
      return res
    })
  },
}
