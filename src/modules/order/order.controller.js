const orderModel = require('./order.model');
const cartModel = require('../cart/cart.model');
const productModel = require('../product/product.model');

const placeOrder = (req, res) => {
  const custId = req.user.id
  const { paymentMethod } = req.body
  const cartItems = cartModel.getCartItems(custId)

  if(!paymentMethod) {
    return res.status(400).json({
      status: 'FAILED',
      message: 'Payment method missing. Please specify your payment method!'
    })
  }

  if(cartItems.length == 0) {
    return res.status(400).json({
      status: 'FAILED',
      message: 'Cart is empty. Please add items to your cart to place an order!'
    })
  }

  let totalAmount = 0 
  cartItems.forEach((cI) => {
    const productPrice = productModel.getProductPrice(cI.productId)
    totalAmount += productPrice * cI.quantity
  })

  const newOrder = {
    customerId: Number(custId),
    products: cartItems.map(item => ({
      productId: productModel.getProductName(item.productId),
      quantity: item.quantity
    })),
    paymentMethod,
    totalAmount: totalAmount.toFixed(2),
    time: new Date().toLocaleString()
  }

  orderModel.addOrder(newOrder)
  cartModel.emptyCart(custId)
  
  res.json({
    status: 'SUCCESS',
    data: newOrder
  })
}

const getOrders = (req, res) => {
  const custId = req.user.id
  const orders = orderModel.getOrders(custId)
  res.json({
    status: 'SUCCESS',
    data: orders
  })
}

const getOrderById = (req, res) => {
  const custId = req.user.id
  const orders = orderModel.getOrderById(custId)
  res.json({
    status: 'SUCCESS',
    data: orders
  })
}

module.exports = {
  placeOrder,
  getOrders,
  getOrderById,
}