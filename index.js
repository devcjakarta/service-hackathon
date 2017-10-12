const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routers = require('./routers')
const cors = require('cors')
const app = express()

mongoose.connect('mongodb://localhost:27017/devcjakarta-hackathon', { useMongoClient: true })
mongoose.Promise = global.Promise

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/api/v1', routers)

app.listen(process.env.port || 5000, () => {
  console.log("Server is running on localhost:5000")
})
