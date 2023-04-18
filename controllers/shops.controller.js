const { getAll, getOne } = require('../services/shops')
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
  async onGetRandom(req, res) {
    try {
      const shop = await getAll()
      if (shop.length < 8) {
        res.status(200).json(shop)
      } else {
        const id = ['', '', '', '', '', '', '', '']
        const shops = []
        id.forEach((e) => {
          shops.push(shop[Math.floor(Math.random() * shop.length) + 1])
        })
        res.status(200).json(shops)
      }
    } catch (err) {
      res.status(500).json({ message: err.message })
    }
  },
}
