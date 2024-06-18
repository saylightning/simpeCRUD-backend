const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require('../controllers/product.controller.js');

// Retrieve All
router.get('/', getProducts);

// Retrieve One
router.get('/:id', getProduct);

// Create
router.post('/', createProduct);

// Update
router.put('/:id', updateProduct);

// Delete
router.delete('/:id', deleteProduct);

// Exports
module.exports = router;