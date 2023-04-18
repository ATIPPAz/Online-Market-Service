const { getCartAll, getCartOne } = require('../services/carts')

module.exports = {
  async onGetAll(req, res) {
    try {
      res.status(200).json({ status: 200, data: await getCartAll() })
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
      res.status(200).json({ status: 200, data: await await getCartOne(id) })
    } catch (err) {
      res.status(500).json({
        status: 500,
        data: { status: 500, message: err.message },
      })
    }
  },
  onCreate(req, res) {
    res.status(201).json({
      status: 201,
      data: [],
    })
  },
  onUpdate(req, res) {
    res.status(201).json({
      status: 201,
      data: [],
    })
  },
  onDelete(req, res) {
    res.status(201).json({
      status: 201,
      data: [],
    })
  },
}
