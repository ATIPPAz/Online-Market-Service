const mongoose = require('mongoose')
const Schema = mongoose.Schema
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    phone: {
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
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  { versionKey: false }
)

const User = mongoose.model('user', userSchema)
module.exports = User
