const express = require('express')
const router = express.Router()
const {
  onGetAll,
  onGetById,
  onCreate,
  onUpdate,
  onDelete,
} = require('../controllers/orders.controller')
const checkJwt = require('../helpers/checkJwt')
const convertJwt = require('../helpers/convertJwt')

router.get('/order', checkJwt, onGetAll)
router.get('/order/:id', checkJwt, onGetById)
router.post('/order', checkJwt, convertJwt, onCreate)
router.put('/order/:id', checkJwt, onUpdate)
router.delete('/order/:id', checkJwt, onDelete)

module.exports = router
