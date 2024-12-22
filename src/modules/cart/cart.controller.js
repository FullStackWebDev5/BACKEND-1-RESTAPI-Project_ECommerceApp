const cartModel = require('./cart.model');

const getCartItems = (req, res) => {
  const custId = req.user.id
  const cartItems = cartModel.getCartItems(custId)
  res.json({
    status: 'SUCCESS',
    data: cartItems
  })
}

const addCartItem = (req, res) => {
  const custId = req.user.id
  const { productId, quantity } = req.body
  cartModel.addToCart(custId, productId, quantity)
  res.json({
    status: 'SUCCESS',
    message: 'Product added to the cart'
  })
}

const removeCartItem = (req, res) => {
  const custId = req.user.id
  const { productId } = req.body
  cartModel.removeFromCart(custId, productId)
  res.json({
    status: 'SUCCESS',
    message: 'Product removed from the cart'
  })
}

module.exports = {
  getCartItems,
  addCartItem,
  removeCartItem
}