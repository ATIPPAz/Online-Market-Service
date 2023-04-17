const mongoose = require('mongoose')
const Schema = mongoose.Schema
const catagorieSchema = new Schema({
  catagoryId: {
    type: String,
  },
  catagoryName: {
    type: String,
  },
})

const Catagorie = mongoose.model('catagories', catagorieSchema)
module.exports = Catagorie
