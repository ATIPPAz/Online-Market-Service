const express = require('express')
const router = express.Router()
const { onGetAll, onGetById } = require('../controllers/favorites.controller')

router.get('/favorite', onGetAll)
router.get('/favorite/:id', onGetById)

module.exports = router
