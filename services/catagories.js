const Catagory = require('../models/catagories')
module.exports = {
  async getAll() {
    return await Catagory.find().select('-_id')
  },
  async getOne(id) {
    const shops = await Catagory.find().select('-_id')
    const shop = shops.filter((e) => e.catagoryId == id)
    if (shop.length !== 0) {
      return shop[0]
    } else {
      return []
    }
  },
}
