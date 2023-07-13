const mongoose = require('mongoose')
const Schema = mongoose.Schema
const marketSchema = new Schema({
  marketId: {
    type: String,
  },
  marketName: {
    type: String,
  },
  marketImg: {
    type: String,
  },
  marketIntroImg: {
    type: String,
  },
  readmore: {
    type: String,
  },
  marketDescribe: {
    type: String,
  },
})

const Market = mongoose.model('markets', marketSchema)
module.exports = Market
