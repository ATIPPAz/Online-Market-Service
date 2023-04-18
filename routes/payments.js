const express = require('express')
const router = express.Router()
const { onGetAll, onGetById } = require('../controllers/payments.controller')

router.get('/payment', onGetAll)
router.get('/payment/:id', onGetById)

module.exports = router
