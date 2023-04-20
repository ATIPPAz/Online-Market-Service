const Favorite = require('../models/favorites')
module.exports = {
  async getFavoriteAll() {
    return await Favorite.find().select('')
  },
  async getFavoriteOne(param) {
    return await Favorite.findOne(param).select('')
  },
  async createFavorite(data) {
    await Favorite.create({ ...data }, (err, res) => {
      if (err) return err
      return res
    })
  },
  async updateFavorite(param, data) {
    await Favorite.updateOne(param, { $set: { ...data } }, (err, res) => {
      if (err) {
        return err
      }
      return res
    })
  },
  async deleteFavorite(id) {
    await Favorite.deleteOne({ _id: id }, (err, res) => {
      if (err) return err
      return res
    })
  },
}
