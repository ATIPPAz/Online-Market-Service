const express = require('express')
const app = express()
const config = require('./configs/app')
require('./configs/express')(app)
app.get('/', function (req, res) {
  res.set('Content-Type', 'text/html')
  res.send(Buffer.from('<h2>Api</h2>'))
})
const server = app.listen(config.port, () => {
  let host = server.address().address
  let port = server.address().port
  console.log(`Server is running at http://${host}:${port}`)
})
