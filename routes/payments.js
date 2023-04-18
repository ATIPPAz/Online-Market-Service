const express = require('express')
const router = express.Router()
const checkJwt = require('../helpers/checkJwt')
const convertJwt = require('../helpers/convertJwt')

const {
  onGetAll,
  onGetById,
  onCrete,
  onDelete,
  onUpdate,
} = require('../controllers/payments.controller')
router.get('/payment', checkJwt, onGetAll)
router.get('/payment/:id', checkJwt, onGetById)
router.post('/payment', checkJwt, convertJwt, onCrete)
router.put('/payment/:id', checkJwt, onDelete)
router.delete('/payment/:id', checkJwt, onUpdate)

module.exports = router
