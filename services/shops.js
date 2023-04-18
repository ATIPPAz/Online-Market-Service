const Shop = require('../models/shops')
module.exports = {
  async getAll() {
    return await Shop.find().select('-_id')
  },
  async getOne(id) {
    const shops = await Shop.find().select('-_id')
    const shop = shops.filter((e) => e.shopId == id)
    if (shop.length !== 0) {
      return shop[0]
    } else {
      return []
    }
  },
}
