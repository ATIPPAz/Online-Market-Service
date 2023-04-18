const Cart = require('../models/carts')
module.exports = {
  async getCartAll() {
    return await Cart.find().select('')
  },
  async getCartOne(id) {
    return await Cart.findOne({ _id: id }).select('')
  },
}
