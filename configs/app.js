require('dotenv').config()

const config = {
  port: process.env.PORT || 5000,
  mongodbUri: process.env.MONGODB_URI,
}
module.exports = config
