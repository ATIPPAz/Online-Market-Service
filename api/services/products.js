const Product = require('../models/products')
module.exports = {
  async getProductAll() {
    const product = await Product.find().select('-_id')
    return product.filter((e) => e.productQty > 0)
  },
  async getProductOne(param) {
    const product = await Product.findOne({ ...param })
    return product.productQty > 0 ? product : 'สินค้าหมด'
  },
  async updateProductOne(condition, payload) {
    await Product.updateOne(
      { ...condition },
      { $set: { ...payload } },
      function (err, result) {
        if (err) {
          throw err
        } else {
          return result
        }
      }
    )
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
