const express = require('express')
const router = express.Router()
const {
  onGetAll,
  onGetById,
} = require('../controllers/cartStatuses.controller')

router.get('/cartStatus', onGetAll)
router.get('/cartStatus/:id', onGetById)

module.exports = router
