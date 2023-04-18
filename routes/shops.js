const express = require('express')
const router = express.Router()

const {
  onGetAll,
  onGetRandom,
  onGetById,
} = require('../controllers/shops.controller')

router.get('/shop', onGetAll)
router.get('/randomShop', onGetRandom)
router.get('/shop/:id', onGetById)

module.exports = router
