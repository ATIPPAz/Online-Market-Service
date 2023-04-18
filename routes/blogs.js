const express = require('express')
const router = express.Router()
const { onGetAll, onGetById } = require('../controllers/blogs.controller')

router.get('/blog', onGetAll)
router.get('/blog/:id', onGetById)

module.exports = router
