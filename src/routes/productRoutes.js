const express = require('express');
const { getProductData } = require('../controllers/productController');
const router = express.Router();

router.get('/productUrl', getProductData);

module.exports = router;
