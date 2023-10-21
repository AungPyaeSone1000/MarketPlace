const express = require('express');
const router = express.Router();
const productController = require('../controllers/productControllers');

// Create a new product
router.post('/products', productController.createProduct);

// Get all products
router.get('/products', productController.getAllProducts);

// Get a specific product by ID
router.get('/products/:productId', productController.getProductById);

// Update a product by ID
router.put('/products/:productId', productController.updateProduct);

// Delete a product by ID
router.delete('/products/:productId', productController.deleteProduct);

// Delete all products
router.delete('/products', productController.deleteAllProducts);

// Find products by name containing "kw"
router.get('/products/search', productController.findProductsByNameContainsKW);

module.exports = router;
