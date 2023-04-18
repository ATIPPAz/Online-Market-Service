const Order = require('../models/order')
module.exports = {
  async getOrderAll() {
    return await Order.find().select('')
  },
  async getOrderOne(id) {
    return await Order.findOne({ _id: id }).select('')
  },
}
