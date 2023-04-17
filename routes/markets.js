const express = require('express')
const router = express.Router()
const Market = require('../models/markets')

// READ ALL
router.get('/market', async (req, res) => {
  try {
    const market = await Market.find().select('-_id')
    res.status(200).json(market)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// READ ONE
router.get('/market/:id', async (req, res) => {
  const id = req.params.id
  try {
    const market = await Market.find().select('-_id')
    res.status(200).json(...market.filter((e) => e.marketId == id))
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
