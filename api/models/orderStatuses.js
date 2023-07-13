const mongoose = require('mongoose')
const Schema = mongoose.Schema
const orderStatusSchema = new Schema({
  orderStateId: {
    type: String,
  },
  orderState: {
    type: String,
  },
})

const OrderStatus = mongoose.model('status-order', orderStatusSchema)
module.exports = OrderStatus
