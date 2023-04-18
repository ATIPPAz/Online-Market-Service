const Product = require('../models/products')
module.exports = {
  async getProductAll() {
    return await Product.find().select('-_id')
  },
  async getProductOne(id) {
    const shops = await Product.find().select('-_id')
    const shop = shops.find((e) => e.productId == id)
    if (shop.length !== 0) {
      return shop
    } else {
      return []
    }
  },
  async getProductOneWithShop(shopId) {
    const shops = await Product.find().select('-_id')
    const shop = shops.filter((e) => e.shopId == shopId)
    if (shop.length !== 0) {
      return shop
    } else {
      return []
    }
  },
}
