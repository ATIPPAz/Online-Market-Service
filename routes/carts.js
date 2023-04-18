const express = require('express')
const router = express.Router()
const { onGetAll, onGetById } = require('../controllers/carts.controller')

router.get('/cart', onGetAll)
router.get('/cart/:id', onGetById)

module.exports = router
