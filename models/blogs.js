const mongoose = require('mongoose')
const Schema = mongoose.Schema
const blogSchema = new Schema({
  blogId: {
    type: String,
  },
  blogImg: {
    type: String,
  },
  blogTitle: {
    type: String,
  },
  blogDescribe: {
    type: String,
  },
  blogData: {
    type: String,
  },
  blogSeen: {
    type: String,
  },
  blogComment: [
    {
      userId: {
        type: String,
      },
      comment: {
        type: String,
      },
    },
  ],
  blogPost: {
    type: String,
  },
  readmore: {
    type: String,
  },
  userId: {
    type: String,
  },
})

const Blog = mongoose.model('blogs', blogSchema)
module.exports = Blog
