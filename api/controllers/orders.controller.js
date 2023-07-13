const { getOrderAll, getOrderOne, createOrder } = require('../services/order')
const { updateProductOne, getProductOne } = require('../services/products')
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
    try {
      await createOrder(req.body)
      const data = await getOrderOne({
        $and: [
          { userId: await req.body.userId },
          { orderDate: await req.body.orderDate },
        ],
      })
      data.orderProduct.forEach(async (element) => {
        const product = await getProductOne({ productId: element.productId })
        if (product) {
          product.productQty -= element.productQty
          await updateProductOne(
            { productId: product.productId },
            { productQty: product.productQty }
          )
        }
      })
      res.status(201).json({
        status: 201,
        data,
      })
    } catch (err) {
      res.status(500).json({
        status: 500,
        massage: err,
      })
    }
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
