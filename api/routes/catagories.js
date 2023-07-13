const express = require('express')
const router = express.Router()
const { onGetAll, onGetById } = require('../controllers/catagories.controller')

router.get('/catagory', onGetAll)
router.get('/catagory/:id', onGetById)

module.exports = router
