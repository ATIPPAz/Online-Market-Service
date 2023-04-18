const express = require('express')
const router = express.Router()
const { onGetAll, onGetById } = require('../controllers/orders.controller')

router.get('/order', onGetAll)
router.get('/order/:id', onGetById)

module.exports = router
