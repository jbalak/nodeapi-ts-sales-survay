import mongoose from 'mongoose'
const { Schema } = mongoose

export default new Schema({
  address: String,
  city: String,
  state: String,
  country: String
})
