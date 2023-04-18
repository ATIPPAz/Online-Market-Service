const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderSchema = new Schema({
  userId: {
    type: String,
  },
  orderId: {
    type: String,
  },
  orderDate: {
    type: String,
  },
  orderStatus: {
    type: String,
  },
  orderProduct: [
    {
      productId: {
        type: String,
      },
      productPrice: {
        type: Number,
      },
      productQty: {
        type: Number,
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

const Order = mongoose.model('order', orderSchema)
module.exports = Order
