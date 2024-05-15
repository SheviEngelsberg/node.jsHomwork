const express = require('express');
const router = express.Router();
const users = require('../controllers/usersController');

//Registered user login
router.post('/login',users.login);

// New user registration
router.post('/signUp',users.signUp);

// Get a single user by name
router.get('/user/:_id',users.getUser);

module.exports = router;



