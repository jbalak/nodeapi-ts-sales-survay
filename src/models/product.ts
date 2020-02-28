import mongoose from 'mongoose'
const { Schema } = mongoose

const ProductSchema = new Schema({
  name: { type: String },
  price: { type: Number },
  rating: { type: Number },
  availability: { type: Number },
  category: { type: String },
  specification: { type: String }
})

export default mongoose.model('products', ProductSchema, 'products')
