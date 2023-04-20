const {
  getPaymentAll,
  getPaymentOne,
  createPayment,
} = require('../services/payments')
const { getAccountOne, update } = require('../services/accounts')

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
  async paid(req, res) {
    try {
      const id = req.params.id
      const cost = req.body.cost
      console.log(id)
      const acc = await getAccountOne({ accountId: id })
      console.log(acc)

      if (acc.money) {
        if (cost < acc.money) {
          console.log('uss')

          const remain = acc.money - cost
          await update(acc.accountId, { money: remain })
          console.log('up')
          res
            .status(200)
            .json({ status: 200, data: await getAccountOne({ accountId: id }) })
        } else {
          res.status(500).json({ status: 500, data: 1 })
        }
      } else {
        res.status(500).json({ status: 500, data: 2 })
      }
    } catch (err) {
      res.status(500).json({ status: 500, data: 'พัง' })
    }

    // } else {
    //   res.json({ status: 500, data: 'ไม่มี payment' })
    // }
  },
  async onCrete(req, res) {
    const userId = req.user.userId
    const accountId = req.body.accountId
    await createPayment({ userId, accountId })
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
  async onUpdate(req, res) {
    res.status(201).json({
      status: 201,
      data: [],
    })
  },
}
