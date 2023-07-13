const Catagory = require('../models/catagories')
module.exports = {
  async getCatagoryAll() {
    return await Catagory.find().select('-_id')
  },
  async getCatagoryOne(id) {
    const shops = await Catagory.find().select('-_id')
    const shop = shops.filter((e) => e.catagoryId == id)
    if (shop.length !== 0) {
      return shop[0]
    } else {
      return []
    }
  },
}
