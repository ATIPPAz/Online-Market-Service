const express = require('express')
const router = express.Router()
const Catagory = require('../models/catagories')

// READ ALL
router.get('/catagory', async (req, res) => {
  try {
    const catagory = await Catagory.find().select('-_id')
    res.status(200).json(catagory)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// READ ONE
router.get('/catagory/:id', async (req, res) => {
  const id = req.params.id
  try {
    const catagory = await Catagory.find().select('-_id')
    res.status(200).json(...catagory.filter((e) => e.catagoryId == id))
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
