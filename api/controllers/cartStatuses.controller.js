const {
  getCartStatusAll,
  getCartStatusOne,
} = require('../services/cartStatuses')

module.exports = {
  async onGetAll(req, res) {
    try {
      res.status(200).json({ status: 200, data: await getCartStatusAll() })
    } catch (err) {
      res.status(500).json({
        status: 500,
        data: { status: 500, message: err.message },
      })
    }
  },

  async onGetById(req, res) {
    const id = req.params.id
    try {
      res
        .status(200)
        .json({ status: 200, data: await await getCartStatusOne(id) })
    } catch (err) {
      res.status(500).json({
        status: 500,
        data: { status: 500, message: err.message },
      })
    }
  },
}
