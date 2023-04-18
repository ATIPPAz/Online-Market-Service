const {
  getFavoriteAll,
  getFavoriteOne,
  createFavorite,
  deleteFavorite,
  updateFavorite,
} = require('../services/favorites')

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
    console.log(req.user.userId)
    const user = await getFavoriteOne({ userId: req.user.userId })
    if (user) {
      await updateFavorite({ userId: req.user.userId }, { like: req.body.like })
      res.status(400).json({
        status: 400,
        data: 'liked update',
      })
      return
    }

    res.status(201).json({
      status: 201,
      data: await createFavorite({
        ...req.body,
        userId: req.user.userId,
      }),
    })
  },
  async onUpdate(req, res) {
    res.status(204).json({
      status: 204,
      data: await updateFavorite(
        { userId: req.user.userId },
        { like: req.body.like }
      ),
    })
  },
}
