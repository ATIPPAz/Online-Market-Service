const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shopSchema = new Schema({
  shopId: {
    type: String,
  },
  shopImg: {
    type: String,
  },
  shopName: {
    type: String,
  },
  shopDescribe: {
    type: String,
  },
  catagoryId: {
    type: String,
  },
  marketId: {
    type: String,
  },
})

const Shop = mongoose.model('shops', shopSchema)
module.exports = Shop
