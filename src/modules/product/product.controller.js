const productModel = require('./product.model')

const getAllProducts = (req, res) => {
  const products = productModel.getAllProducts()
  res.json({
    status: 'SUCCESS',
    data: products
  })
}

const getProductByCategory = (req, res) => {
  const { category } = req.params
  const categoryProducts = productModel.getProductByCategory(category)
  res.json({
    status: 'SUCCESS',
    data: categoryProducts
  })
}

const getProductById = (req, res) => {
  const { id } = req.params
  const product = productModel.getProductById(id)

  if(!product) {
    return res.status(404).json({
      status: 'FAILED',
      message: 'Product not found'
    })
  }

  res.json({
    status: 'SUCCESS',
    data: product
  })
}

const getSearchedProducts = (req, res) => {
  const { searchText } = req.query
  const products = productModel.getSearchedProducts(searchText)
  res.json({
    status: 'SUCCESS',
    data: products
  })
}

const getFilteredProducts = (req, res) => {
  const { minPrice, maxPrice, brand } = req.body
  const products = productModel.getFilteredProducts(brand, minPrice, maxPrice)
  res.json({
    status: 'SUCCESS',
    data: products
  })
}

const addProductRating = (req, res) => {
  const custId = req.user.id
  const { id } = req.params
  const { rating } = req.body

  if(Number(rating) < 1 || Number(rating) > 5) {
    return res.status(400).json({
      status: 'FAILED',
      message: 'Invalid rating. Rating should be between 1 and 5.'
    })
  }

  productModel.addProductRating(custId, id, rating)
  res.json({
    status: 'SUCCESS',
    data: 'Rated product successfully!'
  })
}

module.exports = {
  getAllProducts,
  getProductByCategory,
  getProductById,
  getSearchedProducts,
  getFilteredProducts,
  addProductRating
}






/*
  # Additional Notes:
    - Request parameters: req.params
    - Query parameters: req.query
*/