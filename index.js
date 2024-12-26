const express = require('express')
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const swaggerJSON = require('./documentation/swagger.json');
const dotenv = require('dotenv')
dotenv.config()

const productRoutes = require('./src/modules/product/product.route')
const customerRoutes = require('./src/modules/customer/customer.route')
const cartRoutes = require('./src/modules/cart/cart.route')
const orderRoutes = require('./src/modules/order/order.route')

const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(express.static('public'))

app.use('/api/products', productRoutes)
app.use('/api/customers', customerRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/orders', orderRoutes)
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerJSON));

app.get('/', (req, res) => {
  res.json('Welcome to ECommerce App')
})

app.get('*', (req, res) => {
  res.status(404).send('Not found')
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

    # API Documentation using Swagger
      - UI will be handled by Swagger
      - JSON file with details specified need to be provided
        - swagger: "2.0"
        - info: Basic info of your server app
          - version
          - title
          - description
        - host: Server domain
        - basePath: API prefix
        - paths: API endpoints with all details
          - "/[path]": {
            "[method]": {
              "summary": Title of this route
              "description": Description of this route,
              "parameters": [parameter1, parameter2, ...],
              "responses": {
                "200": response1,
                "400": response2,
                "500": response3,
                ...
              }
            }
          }
          
          - Parameters:
            {
              name: "body",
              "in": "body",
              "required": true,
              "schema": {
                "type": [data type],
                "properties": {
                  "property1": { type: [data type] }
                },
                "required": ["property1", "property2",...]
              }
            }

          - Responses:
            {
              description: Description,
              "schema": {
                "type": [data type],
                "properties": {
                  "property1": { type: [data type] }
                },
              }
            }

    # Resources:
      - Express routing: https://expressjs.com/en/guide/routing.html#routing
      - swagger-ui-express: https://www.npmjs.com/package/swagger-ui-express

    # Notes:
      - Routes -> Controllers -> Models
*/