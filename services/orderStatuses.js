const OrderStatus = require('../models/orderStatuses')
module.exports = {
  async getOrderStatusAll() {
    console.log(await OrderStatus.find())
    return await OrderStatus.find().select('-_id')
  },
  async getOrderStatusOne(id) {
    return await OrderStatus.findOne({ _id: id }).select('-_id')
  },
}
