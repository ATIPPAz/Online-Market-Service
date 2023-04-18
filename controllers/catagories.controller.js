const { getAll, getOne } = require('../services/catagories')

module.exports = {
  async onGetAll(req, res) {
    try {
      res.status(200).json({ status: 200, data: await getAll() })
    } catch (err) {
      res.status(500).json({ status: 500, data: { message: err.message } })
    }
  },

  async onGetById(req, res) {
    const id = req.params.id
    try {
      res.status(200).json({ status: 200, data: await getOne(id) })
    } catch (err) {
      res.status(500).json({ status: 500, data: { message: err.message } })
    }
  },
}
