const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RegistrationSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  tech: {
    type: String,
    require: true
  }
})

const Registration = mongoose.model('users', RegistrationSchema)
module.exports = Registration
