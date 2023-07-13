const Shop = require('../models/shops')
module.exports = {
  async getShopAll() {
    console.log('test')
    return await Shop.find().select('-_id')
  },
  async getShopOne(param) {
    return await Shop.findOne(param).select('-_id')
  },
}
