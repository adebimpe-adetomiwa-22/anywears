const express = require('express');
const router = express.Router();

const {
    getProducts,
    getCategory,
    getCategoryProducts,
    getSingleProduct,
} = require('../controllers/products');

router.route('/').get(getProducts);
router.route('/category').get(getCategory);
router.route('/category/:categoryName').get(getCategoryProducts);
router.route('/:productId').get(getSingleProduct);

module.exports = router;
