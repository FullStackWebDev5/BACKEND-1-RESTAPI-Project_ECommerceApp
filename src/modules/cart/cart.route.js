const express = require('express')
const cartCntrls = require('./cart.controller')
const { isLoggedIn } = require('../../middlewares/auth')

const router = express.Router()

router.get('/items', isLoggedIn, cartCntrls.getCartItems)
router.post('/add', isLoggedIn, cartCntrls.addCartItem)
router.post('/remove', isLoggedIn, cartCntrls.removeCartItem)

module.exports = router