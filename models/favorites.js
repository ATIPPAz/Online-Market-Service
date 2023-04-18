const mongoose = require('mongoose')
const Schema = mongoose.Schema
const favoriteSchema = new Schema({
  userId: {
    type: String,
  },
  like: [
    {
      type: String,
    },
  ],
})

const FavoritE = mongoose.model('favorites', favoriteSchema)
module.exports = FavoritE
