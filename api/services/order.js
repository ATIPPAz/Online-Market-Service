const Order = require('../models/order')
module.exports = {
  async getOrderAll() {
    return await Order.find().select('')
  },
  async getOrderOne(param) {
    return await Order.findOne(param).select('')
  },
  async createOrder(data) {
    await Order.create({ ...data }, async (err, res) => {
      if (err) {
        throw err
      }
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
  async updateMany(condition, payload) {
    await Order.updateOne(
      { ...condition },
      { $set: { ...payload } },
      (err, res) => {
        if (err) {
          return err
        }
        return res
      }
    )
  },
  async deleteOrder(id) {
    await Order.deleteOne({ _id: id }, (err, res) => {
      if (err) return err
      return res
    })
  },
}
