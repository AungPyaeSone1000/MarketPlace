const Product = require('../models/product'); // Assuming you've defined the Product model


// Get all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve products.' });
    }
};

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create the product.' });
  }
};


// Get a product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve the product.' });
  }
};

// Create a new product
exports.createProduct = async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const savedProduct = await newProduct.save();
      res.status(201).json(savedProduct);
    } catch (error) {
      res.status(400).json({ error: 'Failed to create the product.' });
    }
  };
  
// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.productId, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update the product.' });
  }
};

// Delete a product by ID
    exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.productId);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete the product.' });
  }
};

// Delete all products
exports.deleteAllProducts = async (req, res) => {
    try {
      await Product.deleteMany({}); // Assuming you have a "Product" model
      res.status(204).json(); // No content (successful deletion)
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete all products.' });
    }
};

// Find products by name containing "kw"
exports.findProductsByNameContainsKW = async (req, res) => {
    try {
      const products = await Product.find({ name: { $regex: /kw/i } }); // Assuming you have a "Product" model
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve products.' });
    }
  };
  
  
