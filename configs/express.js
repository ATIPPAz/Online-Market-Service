const express = require('express')

const app = (app) => {
  app.use(express.json())
}
module.exports = app
