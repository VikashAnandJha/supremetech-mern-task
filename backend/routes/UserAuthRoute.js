/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     description: Register a new user with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               department:
 *                 type: string
 *     responses:
 *       '201':
 *         description: User registered successfully
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Authenticate and log in a user with the provided credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User logged in successfully
 */

/**
 * @swagger
 * /getUsers:
 *   get:
 *     summary: Get all users with filters
 *     description: Retrieve a list of all users with optional filters.
 *     security:
 *       - Bearer: []  # Use Bearer token for authentication
 *     parameters:
 *       - in: query
 *         name: date
 *         schema:
 *           type: string
 *         description: Filter users by date (YYYY-MM-DD)
 *       - in: query
 *         name: sorting
 *         schema:
 *           type: string
 *         description: Sort users by a specific field
 *       - in: query
 *         name: department
 *         schema:
 *           type: string
 *         description: Filter users by department
 *     responses:
 *       '200':
 *         description: A successful response
 *
 * components:
 *   securitySchemes:
 *     Bearer:
 *       type: apiKey
 *       name: Authorization
 *       in: header
 *       description: >-
 *         Enter the token with the Bearer: prefix, e.g., "Bearer abcde12345".
*/



const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const { registerUser, loginUser, getUsers } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/getUsers', authMiddleware, getUsers);

module.exports = router;
