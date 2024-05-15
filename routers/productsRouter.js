const express = require('express');
const router = express.Router()
const products = require('../controllers/productsController')
  
// Retrieving all products belonging to a certain category
router.get('/products/:category', products.getAllProductsByCategory);

// Retrieving a specific product from a certain category
router.get('/products/:category/:product', products.getAllProductsByCategoryAndProduct);

// Adding a product
router.post('/products',products.addProduct);

//Update a certain product
router.put('/products/:product',products.updateProduct);

// Product deletion
router.delete('/products/:product',products.removeProduct);

module.exports = router;