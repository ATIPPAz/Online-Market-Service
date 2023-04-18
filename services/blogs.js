const Blog = require('../models/blogs')
module.exports = {
  async getBlogAll() {
    return await Blog.find().select('')
  },
  async getBlogOne(id) {
    return await Blog.findOne({ blogId: id }).select('')
  },
}
