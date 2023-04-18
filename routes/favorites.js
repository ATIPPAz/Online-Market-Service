const express = require('express')
const router = express.Router()
const checkJwt = require('../helpers/checkJwt')
const convertJwt = require('../helpers/convertJwt')
const {
  onGetAll,
  onGetById,
  onCreate,
  onUpdate,
} = require('../controllers/favorites.controller')

router.get('/favorite', checkJwt, onGetAll)
router.get('/favorite/:id', checkJwt, onGetById)
router.put('/favorite/:id', checkJwt, onUpdate)
router.post('/favorite/:id', checkJwt, convertJwt, onCreate)

module.exports = router
