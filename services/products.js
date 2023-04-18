const Product = require('../models/products')
module.exports = {
  async getAll() {
    return await Product.find().select('-_id')
  },
  async getOne(id) {
    const shops = await Product.find().select('-_id')
    const shop = shops.filter((e) => e.productId == id)
    if (shop.length !== 0) {
      return shop[0]
    } else {
      return []
    }
  },
}
