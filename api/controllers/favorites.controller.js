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
    const id = req.user.userId
    try {
      res
        .status(200)
        .json({ status: 200, data: await await getFavoriteOne({ userId: id }) })
    } catch (err) {
      res.status(500).json({
        status: 500,
        data: { message: err.message },
      })
    }
  },
  async onCreate(req, res) {
    const userId = req.user.userId
    const shopId = req.body.shopId
    const productId = req.body.productId

    const fav = await getFavoriteOne({ userId })
    if (fav != null) {
      const idx = fav.like.findIndex((e) => e.shopId == shopId)
      // console.log(productId)
      console.log(shopId)
      console.log(fav.like)
      if (idx !== -1) {
        const proidx = fav.like[idx].product.findIndex((e) => e == productId)
        console.log(proidx)
        if (proidx !== -1) {
          fav.like[idx].product.splice(proidx, 1)
        } else {
          fav.like[idx].product.push(productId)
        }
        if (fav.like[idx].product.length === 0) {
          fav.like.splice(idx, 1)
        }
      } else {
        fav.like.push({ shopId, product: [productId] })
      }
      await updateFavorite({ userId }, { ...fav })
      res.status(400).json({
        status: 400,
        data: await getFavoriteOne({ userId }),
      })
      return
    }

    res.status(201).json({
      status: 201,
      data: await createFavorite({
        like: { ...req.body },
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
