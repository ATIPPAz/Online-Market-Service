const express = require('express')
const router = express.Router()
const Shop = require('../models/shops')

// READ ALL
router.get('/shop', async (req, res) => {
  try {
    const shop = await Shop.find().select('-_id')
    res.status(200).json(shop)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// READ ONE
router.get('/shop/:id', async (req, res) => {
  const id = req.params.id
  try {
    const shop = await Shop.find().select('-_id')
    res.status(200).json(...shop.filter((e) => e.shopId == id))
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
