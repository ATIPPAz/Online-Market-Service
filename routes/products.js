const express = require('express')
const router = express.Router()
const { onGetAll, onGetById } = require('../controllers/products.controller')

router.get('/product', onGetAll)
router.get('/product/:id', onGetById)

module.exports = router
