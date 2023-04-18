const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    address: {
      type: String,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  { versionKey: false }
)

const User = mongoose.model('users', userSchema)
module.exports = User
