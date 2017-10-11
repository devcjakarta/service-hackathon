const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routers = require('./routers')
const cors = require('cors')
const app = express()

mongoose.connect('mongodb://localhost:27017/devcjakarta-hackathon')
mongoose.Promise = global.Promise

app.use(bodyParser.json())
app.use(cors())
app.use('/api/v1', routers)

app.listen(process.env.port || 5000, () => {
  console.log("Server is running on localhost:5000")
})
