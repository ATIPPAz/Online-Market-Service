const { getAll, getOne, getOneWithShop } = require('../services/products')

module.exports = {
  async onGetAll(req, res) {
    const id = req.params.id
    const shopId = req.query.shopId
    const catagoryId = req.query.catagoryId
    const marketId = req.query.marketId
    if (shopId) {
      try {
        if (catagoryId && catagoryId != 6) {
          const product = await getOneWithShop(shopId)
          res.status(200).json({
            status: 200,
            data: product.filter((e) => e.catagoryId == catagoryId),
          })
        } else {
          res
            .status(200)
            .json({ status: 200, data: await getOneWithShop(shopId) })
        }
      } catch (err) {
        res.status(500).json({ status: 500, data: { message: err.message } })
      }
    } else {
      try {
        res.status(200).json({ status: 200, data: await getAll() })
      } catch (err) {
        res.status(500).json({ status: 500, data: { message: err.message } })
      }
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
