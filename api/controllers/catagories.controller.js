const { getCatagoryAll, getCatagoryOne } = require('../services/catagories')

module.exports = {
  async onGetAll(req, res) {
    try {
      res.status(200).json({ status: 200, data: await getCatagoryAll() })
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message })
    }
  },

  async onGetById(req, res) {
    const id = req.params.id
    try {
      res.status(200).json({ status: 200, data: await getCatagoryOne(id) })
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message })
    }
  },
}
