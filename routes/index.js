const express = require('express')
const shop = require('./shops')
const routes = express.Router()
routes.use(shop)
module.exports = routes
