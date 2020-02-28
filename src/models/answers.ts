import mongoose from 'mongoose'
const { Schema } = mongoose
const AnswersSchema = new Schema({
  question: mongoose.Types.ObjectId,
  answer: String
})

export default mongoose.model('answers', AnswersSchema, 'answers')
