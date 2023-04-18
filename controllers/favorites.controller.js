const { getFavoriteAll, getFavoriteOne } = require('../services/favorites')

module.exports = {
  async onGetAll(req, res) {
    try {
      res.status(200).json({ status: 200, data: await getFavoriteAll() })
    } catch (err) {
      res.status(500).json({
        status: 500,
        data: { message: err.message },
      })
    }
  },

  async onGetById(req, res) {
    const id = req.params.id
    try {
      res
        .status(200)
        .json({ status: 200, data: await await getFavoriteOne(id) })
    } catch (err) {
      res.status(500).json({
        status: 500,
        data: { message: err.message },
      })
    }
  },
  async onCreate(req, res) {
    res.status(201).json({
      status: 201,
      data: [],
    })
  },
  async onUpdate(req, res) {
    res.status(204).json({
      status: 204,
      data: [],
    })
  },
}
