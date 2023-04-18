const { getPaymentAll, getPaymentOne } = require('../services/payments')

module.exports = {
  async onGetAll(req, res) {
    try {
      res.status(200).json({
        status: 200,
        data: await getPaymentAll(),
      })
    } catch {
      res.status(500).json({ status: 500, message: err.message })
    }
  },

  async onGetById(req, res) {
    const id = req.params.id
    try {
      res.status(200).json({ status: 200, data: await getPaymentOne(id) })
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message })
    }
  },
}
