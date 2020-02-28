import express from 'express'
import Salesman from '../models/salesman'
const router = express.Router()

router.post('/add', async (req, res) => {
  let { firstName, lastName, survey_performed, company } = req.body

  let newSalesMan = {
    firstName,
    lastName,
    survey_performed,
    company
  }

  res.send({ firstName, lastName, survey_performed, company })
})

export default router
