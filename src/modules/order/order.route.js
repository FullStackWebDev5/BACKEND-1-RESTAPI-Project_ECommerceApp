const express = require('express')
const orderCntrls = require('./order.controller')
const { isLoggedIn } = require('../../middlewares/auth')

const router = express.Router()

router.post('/place', isLoggedIn, orderCntrls.placeOrder)
router.get('/', isLoggedIn, orderCntrls.getOrders)
router.get('/:id', isLoggedIn, orderCntrls.getOrderById)

module.exports = router