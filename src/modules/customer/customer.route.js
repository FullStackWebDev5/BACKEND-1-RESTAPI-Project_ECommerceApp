const express = require('express')
const customerCntrls = require('./customer.controller')

const router = express.Router()

router.post('/signup', customerCntrls.signup)
router.post('/login', customerCntrls.login)

module.exports = router

/*
  # API Documentation for Customer routes
    - Customer Sign up
      - API: http://localhost:3000/api/customers/signup
      - Method: POST
      - Body: JSON object
        - properties: name(string), email(string), password(string)
        - required: name, email, password
      - Response: JSON object
        - Status code: 201
          - properties: status(string), message(string)
        - Status code: 400
          - properties: status(string), message(string)

    - Customer Login
      - API: http://localhost:3000/api/customers/login
      - Method: POST
      - Body: JSON object
        - properties: email (string), password (string)
        - required: email, password
      - Response: JSON object
        - Status code: 200
          - properties: status(string), message(string), token(string)
        - Status code: 401
          - properties: status(string), message(string)
*/