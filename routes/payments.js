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
  paid,
} = require('../controllers/payments.controller')
router.get('/payment', checkJwt, onGetAll)
router.get('/payment/:id', checkJwt, onGetById)
router.post('/payment/:id', checkJwt, convertJwt, onCrete)
router.put('/payment/:id', checkJwt, onUpdate)
router.delete('/payment/:id', checkJwt, onDelete)
router.put('/paid/:id', checkJwt, paid)

module.exports = router
