const { getAccountOne, update, getAccountAll } = require('../services/accounts')

module.exports = {
  async onGetAll(req, res) {
    try {
      res.status(200).json({
        status: 200,
        data: await getAccountAll(),
      })
    } catch {
      res.status(500).json({ status: 500, message: err.message })
    }
  },

  async onGetById(req, res) {
    const id = req.params.id
    try {
      res
        .status(200)
        .json({ status: 200, data: await getAccountOne({ accountId: id }) })
    } catch (err) {
      res.status(500).json({ status: 500, message: err.message })
    }
  },
  async paid(req, res) {
    try {
      const id = req.params.id
      const cost = req.body.cost

      const acc = await getAccountOne({ accountId: id })
      console.log(acc)

      if (acc.money) {
        if (cost > acc.money) {
          const remain = acc.money - cost
          await update(accout.accoutId, { money: remain })
          res
            .status(200)
            .json({ status: 200, data: await getAccountOne({ accountId: id }) })
        } else {
          res.status(500).json({ status: 500, data: 'เงินไม่พอ' })
        }
      } else {
        res.status(500).json({ status: 500, data: 'ไม่พบบัญชีธนาคารนี้' })
      }
    } catch (err) {
      res.status(500).json({ status: 500, data: 'พัง' })
    }

    // } else {
    //   res.json({ status: 500, data: 'ไม่มี payment' })
    // }
  },
  async onCrete(req, res) {
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
