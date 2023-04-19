const express = require('express')
const router = express.Router()
const {
  login,
  registerUser,
  getUserWithJwt,
} = require('../controllers/users.controller')
const convertJwt = require('../helpers/convertJwt')
const checkJwt = require('../helpers/checkJwt')
router.post('/register', registerUser)
router.post('/login', login)
router.get('/user', checkJwt, convertJwt, getUserWithJwt)
module.exports = router
