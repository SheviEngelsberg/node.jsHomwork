const express = require('express');
const router = express.Router()
const categories = require('../controllers/categoriesController');

// Get all categories sorted alphabetically
router.get('/categories', categories.getAllCategories);

// Get a single category by name
router.get('/categories/:name', categories.getCategory);

// Create a new category
router.post('/categories', categories.createCategory);

// Update a category by name
router.put('/categories/:name', categories.updateCategory);

// Delete a category by name
router.delete('/categories/:name', categories.deleteCategory);

module.exports = router;
