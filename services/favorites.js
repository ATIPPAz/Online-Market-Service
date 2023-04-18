const Favorite = require('../models/favorites')
module.exports = {
  async getFavoriteAll() {
    return await Favorite.find().select('')
  },
  async getFavoriteOne(id) {
    return await Favorite.findOne({ _id: id }).select('')
  },
  async createFavorite(data) {
    Favorite.create({ ...data }, (err, res) => {
      if (err) return err
      return res
    })
  },
  async updateFavorite(id, data) {
    await Favorite.updateOne({ _id: id }, { $set: { ...data } }, (err, res) => {
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
