let CART = [
  {
    customerId: 1,
    productId: 12,
    quantity: 7
  },
  {
    customerId: 2,
    productId: 9,
    quantity: 3
  },
  {
    customerId: 1,
    productId: 27,
    quantity: 4
  }
]

const getCartItems = (customerId) => {
  return CART.filter(item => item.customerId === Number(customerId))
}

const addToCart = (customerId, productId, quantity) => {
  const cartItem = CART.find(item => item.customerId === Number(customerId) && item.productId === Number(productId))

  if(cartItem) {
    cartItem.quantity += Number(quantity)
    return
  }

  const newCartItem = {
    customerId: Number(customerId),
    productId: Number(productId),
    quantity: Number(quantity)
  }
  CART.push(newCartItem)
}

const removeFromCart = (customerId, productId) => {
  CART = CART.filter(item => item.customerId != Number(customerId) || item.productId != Number(productId))
}

const emptyCart = (customerId) => {
  CART = CART.filter(item => item.customerId != Number(customerId))
}

module.exports = {
  getCartItems,
  addToCart,
  removeFromCart,
  emptyCart
}