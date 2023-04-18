const Cart = require('../models/carts')
module.exports = {
  async getCartAll() {
    return await Cart.find().select('')
  },
  async getCartOne(id) {
    return await Cart.findOne({ _id: id }).select('')
  },
  async createCart(data) {
    Cart.create({ ...data }, (err, res) => {
      if (err) return err
      return res
    })
  },
  async updateCart(id, data) {
    await Cart.updateOne({ _id: id }, { $set: { ...data } }, (err, res) => {
      if (err) {
        return err
      }
      return res
    })
  },
  async deleteCart(id) {
    await Cart.deleteOne({ _id: id }, (err, res) => {
      if (err) return err
      return res
    })
  },
}
