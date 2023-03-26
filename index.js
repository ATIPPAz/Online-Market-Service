const express = require('express')
const app = express()
const config = require('./configs/app')
require('./configs/express')(app)

// Middleware
// require('./configs/middleware')

// Routes
// app.use(require('./routes'))

// Error handler
// require('./configs/errorHandler')(config.isProduction, app)

// Start Server
const server = app.listen(config.port, () => {
  console.log(config)
  let host = server.address().address
  let port = server.address().port
  console.log(`Server is running at http://${host}:${port}`)
})
