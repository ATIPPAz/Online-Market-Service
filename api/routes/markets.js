const express = require('express')
const router = express.Router()
const { onGetAll, onGetById } = require('../controllers/markets.controller')

router.get('/market', onGetAll)
router.get('/market/:id', onGetById)

module.exports = router
