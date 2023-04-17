const express = require('express')
const routes = express.Router()
routes.get('/', (req, res) => {
  res.end('hello this my api')
})
module.exports = routes
