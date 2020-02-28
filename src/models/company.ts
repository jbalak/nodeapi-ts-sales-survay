import mongoose from 'mongoose'
import addressSchema from './schemas/addressSchema'
const { Schema } = mongoose

const CompanySchema = new Schema({
  name: String,
  size: Number,
  location: addressSchema
})

export default mongoose.model('company', CompanySchema, 'company')
