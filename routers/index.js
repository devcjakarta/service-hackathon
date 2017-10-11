const express = require('express')
const router = express.Router()
const Registration = require('../models/RegistrationModel')


router.get('/users', (req, res) => {
  Registration.find({})
    .then((result) => {
      res.send({
        data: result,
        status: res.statusCode,
        message: "Success retrive all data"
      })
    })
    .catch((e) => {
      res.send({
        errorName: e.name,
        message: e.message
      })
    })
})

router.post('/user', (req, res, next) => {
  console.log(req.body)
  Registration.create(req.body)
    .then(() => res.send({
      data: [
        {
          name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
          title: req.body.title,
          tech: req.body.tech
        }
      ],
      status: res.statusCode,
      message: "Registration Success"
    }))
    .catch((e) => {
      res.send({
        error: e.name,
        message: e.message
      })
    })
})

module.exports = router
