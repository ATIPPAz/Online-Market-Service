const express = require('express')
const router = express.Router()
const {
  onGetAll,
  onGetById,
} = require('../controllers/orderStatuses.controller')

router.get('/orderStatus', onGetAll)
router.get('/orderStatus/:id', onGetById)

module.exports = router
