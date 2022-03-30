const express = require('express');
const CategoryController = require('../controllers/category');

const router = express.Router();

router.get('/getcategories', CategoryController.getCategories);

module.exports = router;
