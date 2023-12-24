const express = require("express");
const router = express.Router();
const adminControllers = require('../controllers/adminControllers');

router.get('/create-product', adminControllers.get_admin_createProduct);
router.post('/create-product', adminControllers.post_admin_createProduct);

router.get('/products-list', adminControllers.get_admin_productsList);
router.get('/edit-product/:id', adminControllers.get_admin_editProduct);





module.exports = router;