import Survey from '../models/survey'
import express from 'express'
import { getQuestion } from '../utils/getQuestions'
const router = express.Router()

router.post('/add', async (req, res) => {
  let {
    surveyName,
    address,
    city,
    state,
    country,
    surveyProduct,
    questions,
    survey_date,
    store_id,
    shop_type,
    nearest_distributor,
    previous_survey_date,
    previous_quantity_noted,
    Sales_person_details
  } = req.body

  let newSutvey = {
    surveyName,
    location: {
      address,
      city,
      state,
      country
    },
    surveyProduct,
    questions: [...getQuestion(questions)],
    survey_date: new Date(survey_date),
    store_id,
    shop_type,
    nearest_distributor,
    previous_survey_date: new Date(previous_survey_date),
    previous_quantity_noted,
    Sales_person_details
  }

  try {
    let savedSurvey = await new Survey(newSutvey).save()
    return res.send(savedSurvey)
  } catch (error) {
    return res.status(400).send(error.message)
  }
})

router.get('/get/:pageNo', async (req, res) => {
  let page =
    parseInt(req.params.pageNo) <= 1 ? 0 : parseInt(req.params.pageNo) - 1

  let surveys = await Survey.find()
    .skip(page * 10)
    .limit(10)

  if (surveys.length) {
    return res.send({ surveys })
  }
  return res.status(400).send({ message: 'nothing found' })
})

router.delete('/delete/:id', async (req, res) => {
  let id = req.params.id
  try {
    let deletedSurvey = await Survey.findByIdAndDelete(id)
    return res.send({ deletedSurvey })
  } catch (error) {
    return res.status(400).send({ message: error.message })
  }
})

router.put('/update/:id', async (req, res) => {
  let {
    surveyName,
    address,
    city,
    state,
    country,
    surveyProduct,
    questions,
    survey_date,
    store_id,
    shop_type,
    nearest_distributor,
    previous_survey_date,
    previous_quantity_noted,
    Sales_person_details
  } = req.body

  let finalQues = questions.map((Q: string) => {
    return {
      name: Q
    }
  })

  let newObj = {
    surveyName,
    location: {
      address,
      city,
      state,
      country
    },
    surveyProduct,
    questions: [...getQuestion(questions)],
    survey_date: new Date(survey_date),
    store_id,
    shop_type,
    nearest_distributor,
    previous_survey_date: new Date(previous_survey_date),
    previous_quantity_noted,
    Sales_person_details
  }

  try {
    let updatedSurvey = await Survey.findByIdAndUpdate(
      req.params.id,
      {
        ...newObj
      },
      { new: true }
    )

    return res.send({ updatedSurvey })
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
})
export default router
