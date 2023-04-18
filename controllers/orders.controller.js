const { getOrderAll, getOrderOne } = require('../services/order')

module.exports = {
  async onGetAll(req, res) {
    try {
      res.status(200).json({
        status: 200,
        data: await getOrderAll(),
      })
    } catch {
      res.status(500).json({ status: 500, message: err.message })
    }
  },

  async onGetById(req, res) {
    const id = req.params.id
    try {
      res.status(200).json({ status: 200, data: await getOrderOne(id) })
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message })
    }
  },
  async onCreate(req, res) {
    res.status(201).json({
      status: 201,
      data: [],
    })
  },
  async onUpdate(req, res) {
    res.status(201).json({
      status: 201,
      data: [],
    })
  },
  async onDelete(req, res) {
    res.status(201).json({
      status: 201,
      data: [],
    })
  },
}
