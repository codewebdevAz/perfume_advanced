const express = require('express');
const router = express.Router();

const authControllers = require('../controllers/authControllers');

router.get('/register',authControllers.get_register);
router.post('/register',authControllers.post_register);
router.get('/login',authControllers.get_login);



module.exports = router;