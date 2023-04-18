const { getAll, getOne } = require('../services/markets')

module.exports = {
  async onGetAll(req, res) {
    try {
      res.status(200).json(await getAll())
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },

  async onGetById(req, res) {
    const id = req.params.id
    try {
      res.status(200).json(await getOne(id))
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },
}
