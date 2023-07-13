const CartStatus = require('../models/cartStatuses')
module.exports = {
  async getCartStatusAll() {
    return await CartStatus.find().select('-_id')
  },
  async getCartStatusOne(id) {
    return await CartStatus.findOne({ cartStatusId: id }).select('-_id')
  },
}
