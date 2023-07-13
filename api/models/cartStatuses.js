const mongoose = require('mongoose')
const Schema = mongoose.Schema
const cartStatusesSchema = new Schema({
  cartStatusId: {
    type: String,
  },
  cartStatus: {
    type: String,
  },
})

const CartStatus = mongoose.model('status-cart', cartStatusesSchema)
module.exports = CartStatus
