const express = require("express");
const router = express.Router();
const pageControllers = require('../controllers/pageControllers');

router.get('/', pageControllers.get_blog);
router.get('/basket', pageControllers.get_basket);
router.get('/products/:id', pageControllers.get_product);




module.exports = router;