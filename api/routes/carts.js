const express = require('express')
const router = express.Router()
const checkJwt = require('../helpers/checkJwt')
const convertJwt = require('../helpers/convertJwt')
const {
  onGetAll,
  onGetById,
  onCreate,
  onUpdate,
  onDelete,
} = require('../controllers/carts.controller')

router.get('/cart', checkJwt, onGetAll)
router.get('/cart/:id', checkJwt, onGetById)
router.post('/cart/', checkJwt, convertJwt, onCreate)
router.put('/cart/:id', checkJwt, onUpdate)
router.delete('/cart/:id', checkJwt, onDelete)

module.exports = router
