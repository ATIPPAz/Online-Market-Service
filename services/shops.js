const Shop = require('../models/shops')
module.exports = {
  async getShopAll() {
    return await Shop.find().select('-_id')
  },
  async getShopOne(id) {
    const shops = await Shop.find().select('-_id')
    const shop = shops.filter((e) => e.shopId == id)
    if (shop.length !== 0) {
      return shop[0]
    } else {
      return []
    }
  },
}
