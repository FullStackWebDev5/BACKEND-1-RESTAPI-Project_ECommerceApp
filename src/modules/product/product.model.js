const PRODUCTS = [
  {
    id: 1,
    category: 'Fashion',
    name: 'Product 1',
    price: 1199,
    brand: 'Brand A',
    ratings: {}
  },
  {
    id: 2,
    category: 'Fashion',
    name: 'Product 2',
    price: 2499,
    brand: 'Brand A',
    ratings: {}
  },
  {
    id: 3,
    category: 'Fashion',
    name: 'Product 3',
    price: 1899,
    brand: 'Brand B',
    ratings: {}
  },
  {
    id: 4,
    category: 'Electronics',
    name: 'Product 4',
    price: 1599,
    brand: 'Brand C',
    ratings: {}
  },
  {
    id: 5,
    category: 'Fashion',
    name: 'Product 5',
    price: 899,
    brand: 'Brand B',
    ratings: {}
  },
  {
    id: 6,
    category: 'Beauty',
    name: 'Product 6',
    price: 1399,
    brand: 'Brand D',
    ratings: {}
  },
  {
    id: 7,
    category: 'Furniture',
    name: 'Product 7',
    price: 5999,
    brand: 'Brand C',
    ratings: {}
  },
  {
    id: 8,
    category: 'Electronis',
    name: 'Product 8',
    price: 2699,
    brand: 'Brand D',
    ratings: {}
  },
  {
    id: 9,
    category: 'Grocery',
    name: 'Product 9',
    price: 1499,
    brand: 'Brand D',
    ratings: {}
  },
  {
    id: 10,
    category: 'Toys',
    name: 'Product 10',
    price: 1199,
    brand: 'Brand C',
    ratings: {}
  },
  {
    "id": 11,
    "category": "Fashion",
    "name": "Product 11",
    "price": 1299,
    "brand": "Brand A",
    ratings: {}
  },
  {
    "id": 12,
    "category": "Electronics",
    "name": "Product 12",
    "price": 3499,
    "brand": "Brand B",
    ratings: {}
  },
  {
    "id": 13,
    "category": "Beauty",
    "name": "Product 13",
    "price": 999,
    "brand": "Brand C",
    ratings: {}
  },
  {
    "id": 14,
    "category": "Furniture",
    "name": "Product 14",
    "price": 7999,
    "brand": "Brand D",
    ratings: {}
  },
  {
    "id": 15,
    "category": "Grocery",
    "name": "Product 15",
    "price": 699,
    "brand": "Brand A",
    ratings: {}
  },
  {
    "id": 16,
    "category": "Toys",
    "name": "Product 16",
    "price": 1799,
    "brand": "Brand B",
    ratings: {}
  },
  {
    "id": 17,
    "category": "Fashion",
    "name": "Product 17",
    "price": 1099,
    "brand": "Brand C",
    ratings: {}
  },
  {
    "id": 18,
    "category": "Beauty",
    "name": "Product 18",
    "price": 1199,
    "brand": "Brand D",
    ratings: {}
  },
  {
    "id": 19,
    "category": "Fashion",
    "name": "Product 19",
    "price": 2399,
    "brand": "Brand A",
    ratings: {}
  },
  {
    "id": 20,
    "category": "Furniture",
    "name": "Product 20",
    "price": 1399,
    "brand": "Brand B",
    ratings: {}
  },
  {
    "id": 21,
    "category": "Fashion",
    "name": "Product 21",
    "price": 1499,
    "brand": "Brand C",
    ratings: {}
  },
  {
    "id": 22,
    "category": "Electronics",
    "name": "Product 22",
    "price": 2599,
    "brand": "Brand D",
    ratings: {}
  },
  {
    "id": 23,
    "category": "Grocery",
    "name": "Product 23",
    "price": 799,
    "brand": "Brand A",
    ratings: {}
  },
  {
    "id": 24,
    "category": "Toys",
    "name": "Product 24",
    "price": 1399,
    "brand": "Brand B",
    ratings: {}
  },
  {
    "id": 25,
    "category": "Beauty",
    "name": "Product 25",
    "price": 1599,
    "brand": "Brand C",
    ratings: {}
  },
  {
    "id": 26,
    "category": "Electronics",
    "name": "Product 26",
    "price": 2999,
    "brand": "Brand D",
    ratings: {}
  },
  {
    "id": 27,
    "category": "Fashion",
    "name": "Product 27",
    "price": 1899,
    "brand": "Brand A",
    ratings: {}
  },
  {
    "id": 28,
    "category": "Grocery",
    "name": "Product 28",
    "price": 999,
    "brand": "Brand B",
    ratings: {}
  },
  {
    "id": 29,
    "category": "Furniture",
    "name": "Product 29",
    "price": 6999,
    "brand": "Brand C",
    ratings: {}
  },
  {
    "id": 30,
    "category": "Toys",
    "name": "Product 30",
    "price": 1599,
    "brand": "Brand D",
    ratings: {}
  }
]

const getAllProducts = () => {
  return PRODUCTS
}

const getProductByCategory = (category) => {
  return PRODUCTS.filter(product => product.category === category)
}

const getProductById = (id) => {
  return PRODUCTS.find(product => product.id === Number(id))
}

const getSearchedProducts = (query) => {
  return PRODUCTS.filter(product => product.name.includes(query) || product.brand.includes(query) || product.category.includes(query))
}

const getFilteredProducts = (brand, minPrice = 0, maxPrice = 100000 ) => {
  return PRODUCTS.filter(product => product.price >= Number(minPrice) && product.price <= Number(maxPrice) && (!brand || product.brand == brand))
}

const addProductRating = (custId, id, rating) => {
  const product = PRODUCTS.find(product => product.id == Number(id))

  if(product) {
    product.ratings[custId] = rating
  }
}

const getProductName = (id) => {
  const product = PRODUCTS.find(product => product.id === Number(id))
  if(product) {
    return product.name
  }
}

const getProductPrice = (id) => {
  const product = PRODUCTS.find(product => product.id === Number(id))
  if(product) {
    return product.price
  }
}

module.exports = {
  getAllProducts,
  getProductByCategory,
  getProductById,
  getSearchedProducts,
  getFilteredProducts,
  addProductRating,
  getProductName,
  getProductPrice
}
