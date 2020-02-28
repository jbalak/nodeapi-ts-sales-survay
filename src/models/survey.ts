import mongoose from 'mongoose'
import addressSchema from './schemas/addressSchema'
const { Schema } = mongoose
const SurveySchema = new Schema({
  surveyName: String,
  location: addressSchema,
  surveyProduct: { type: mongoose.Types.ObjectId, ref: 'products' },
  questions: [
    {
      name: { type: String }
    }
  ],
  survey_date: Date,
  store_id: String,
  shop_type: String, //( grocery, Kirana, mall )
  nearest_distributor: String, //( object with location, name, total stocks, number of employees (
  previous_survey_date: Date,
  previous_quantity_noted: Number,
  Sales_person_details: mongoose.Types.ObjectId
})

export default mongoose.model('survey', SurveySchema, 'surveys')
