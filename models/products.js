const mongoose = require('mongoose')
const Schema = mongoose.Schema
const productSchema = new Schema({
  productId: {
    type: String,
  },
  shopId: {
    type: String,
  },
  productPrice: {
    type: Number,
  },
  productName: {
    type: String,
  },
  productDescribe: {
    type: String,
  },
  productDetail: {
    type: String,
  },
  productImg: [
    {
      type: String,
    },
  ],
  productCoverImg: {
    type: String,
  },
  productQty: {
    type: Number,
  },
  catagoryId: {
    type: String,
  },
})

const Product = mongoose.model('products', productSchema)
module.exports = Product
