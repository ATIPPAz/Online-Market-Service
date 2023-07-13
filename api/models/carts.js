const mongoose = require('mongoose')
const Schema = mongoose.Schema
const cartSchema = new Schema({
  cartId: {
    type: String,
  },
  cartStatusId: {
    type: String,
  },
  userId: {
    type: String,
  },
  products: [
    {
      productId: {
        type: String,
      },
      qty: {
        type: String,
      },
    },
  ],
  marketId: {
    type: String,
  },
  shopId: {
    type: String,
  },
})

const Cart = mongoose.model('carts', cartSchema)
module.exports = Cart
