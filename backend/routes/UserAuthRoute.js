// userRoutes.js
const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware')
// Import the controller functions for user operations
const { registerUser, loginUser, getUsers } = require('../controllers/userController');

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// User dashboard route with filters
router.get('/getUsers', authMiddleware, getUsers);

module.exports = router;
