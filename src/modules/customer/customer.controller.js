const jwt = require('jsonwebtoken')
const customerModel = require('./customer.model')

const signup = (req, res) => {
  const { name, email, password } = req.body
  const newCustomer = { name, email, password }
  customerModel.addCustomer(newCustomer)
  res.send({
    status: 'SUCCESS',
    message: 'Customer signed up successfully'
  })
}

const login = (req, res) => {
  const { email, password } = req.body
  const user = customerModel.findCustomerExists(email, password)

  if(user.error) {
    return res.status(401).json({
      status: 'FAILED',
      message: user.message
    })
  }

  const token = jwt.sign(user, process.env.JWT_PRIVATE_KEY, { expiresIn: '30m' })

  res.json({
    status: 'SUCCESS',
    message: `Customer ${user.name} has logged in successfully`,
    token
  })
}

module.exports = {
  signup,
  login
}