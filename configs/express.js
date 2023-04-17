const express = require('express')
const cors = require('cors')
const routes = require('../routes/index')
const app = async (app) => {
  require('../configs/db')
  const allowedOrigins = []
  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin) return callback(null, true)
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          'The CORS policy for this site does not ' +
          'allow access from the specified Origin.'
        return callback(new Error(msg), false)
      }
      return callback(null, true)
    },
  }
  app.use(cors(corsOptions))
  app.use(express.json())
  app.use(routes)
}
module.exports = app
