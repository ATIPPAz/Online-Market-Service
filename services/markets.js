const Market = require('../models/markets')
module.exports = {
  async getAll() {
    return await Market.find().select('-_id')
  },
  async getOne(id) {
    const shops = await Market.find().select('-_id')
    const shop = shops.filter((e) => e.marketId == id)
    if (shop.length !== 0) {
      return shop[0]
    } else {
      return []
    }
  },
}
