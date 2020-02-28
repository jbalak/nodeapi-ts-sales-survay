import mongoose from 'mongoose'
const { Schema } = mongoose
const SalesManSchema = new Schema({
  firstName: String,
  lastName: String,
  survey_performed: { type: mongoose.Types.ObjectId, ref: 'surveys' },
  company: mongoose.Types.ObjectId
})

export default mongoose.model('salesman', SalesManSchema, 'salesmans')
