const express = require('express');
const router = express.Router();
const { registerUser, loginUser, currentUser } = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');

router.post('/user/register', registerUser)

router.post('/user/login', loginUser)

router.get('/user/current', validateToken, currentUser)

module.exports = router