const Favorite = require('../models/favorites')
module.exports = {
  async getFavoriteAll() {
    return await Favorite.find().select('')
  },
  async getFavoriteOne(id) {
    return await Favorite.findOne({ _id: id }).select('')
  },
}
