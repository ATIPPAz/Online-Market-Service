const express = require('express')
const router = express.Router()
const Product = require('../models/products')

// READ ALL
router.get('/product', async (req, res) => {
  try {
    const product = await Product.find().select('-_id')
    res.status(200).json(product)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// READ ONE
router.get('/product/:id', async (req, res) => {
  const id = req.params.id
  try {
    const product = await Product.find().select('-_id')
    res.status(200).json(...product.filter((e) => e.productId == id))
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
