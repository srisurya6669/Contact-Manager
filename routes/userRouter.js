const express = require('express');
const router = express.Router();

const { registerUser, loginUser, currentUser } = require('../controllers/userController')

router.post('/user/register', registerUser)

router.post('/user/login', loginUser)

router.get('/user/current', currentUser)

module.exports = router