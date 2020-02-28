import express from 'express'
import bodyParser from 'body-parser'

const app = express()

//start server
app.listen(3000, () => {
  console.log('started at port 3000')
})

//routes

//database connection
import db from './config/db'
db()
  .then(res => {
    console.log('connected to db')
  })
  .catch(e => {
    console.log(e.message)
  })

//imports routes
import salesman from './routes/salesman'
import surveys from './routes/survey'
import products from './routes/products'
//middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//routes
app.use('/api/salesman', salesman)
app.use('/api/survey', surveys)
app.use('/api/products', products)
