const express = require('express')
const bodyParser = require('body-parser')
const productRoutes = require('./src/modules/product/product.route')
const customerRoutes = require('./src/modules/customer/customer.route')
const cartRoutes = require('./src/modules/cart/cart.route')
const orderRoutes = require('./src/modules/order/order.route')
const dotenv = require('dotenv')
dotenv.config()

const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(express.static('public'))

app.use('/api/products', productRoutes)
app.use('/api/customers', customerRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/orders', orderRoutes)

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to ECommerce App'
  })
})

app.listen(3000, () => {
  console.log('Server is up :)')
})














/*
  # E-Commerce App (Using REST API)
    - Features/Modules
      - Products
        - Get all products ✅
        - Get products by category ✅
        - Get product by ID ✅
        - Get searched products ✅
        - Get filtered products (Min.price, Max.price, Brand) ✅
        - Rate the product ✅
      - Customers
        - Sign up ✅
        - Login ✅
      - Cart (For individual customers)
        - Get all cart items of a customer ✅
        - Add to cart ✅
        - Delete from cart ✅
      - Order (For individual customers)
        - Place order ✅
        - Get orders by customer ID ✅
        - Get order by ID ✅

    # Resources:
      - Express routing: https://expressjs.com/en/guide/routing.html#routing

    # Notes:
      - Routes -> Controllers -> Models
*/