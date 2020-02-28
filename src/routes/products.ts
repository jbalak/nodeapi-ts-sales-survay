import express from 'express'
import Products from '../models/product'
const router = express.Router()
router.post('/add', async (req, res) => {
  let { name, price, rating, availability, category, specification } = req.body
  if (
    !name ||
    !price ||
    !rating ||
    !availability ||
    !category ||
    !specification
  ) {
    return res.status(400).send({
      status: false,
      message: 'some fields are missing'
    })
  }

  let newProduct = {
    name,
    price,
    rating,
    availability,
    category,
    specification
  }

  try {
    let savedProduct = await new Products(newProduct).save()
    if (savedProduct) {
      return res.send({ savedProduct })
    }
  } catch (error) {
    res.status(400).send({
      message: error.message
    })
  }
})

router.get('/get/:pageNo', async (req, res) => {
  let page =
    parseInt(req.params.pageNo) <= 1 ? 0 : parseInt(req.params.pageNo) - 1

  let foundProduct = await Products.find()
    .skip(page * 10)
    .limit(10)

  if (foundProduct.length) {
    return res.send({ foundProduct })
  }
  return res.status(400).send({ message: 'nothing found' })
})

export default router
