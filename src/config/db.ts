import mongoose from 'mongoose'

export default async () => {
  console.log('indb...')

  return await mongoose.connect('mongodb://localhost/sales-surey', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}
