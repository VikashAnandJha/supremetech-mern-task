const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET
// Controller function for user registration
const registerUser = (req, res) => {
    // Extract user data from the request body
    const { username, password } = req.body;

    // Your registration logic here, e.g., saving user to the database

    // Sample response for now
    res.json({ message: 'User registered successfully' });
};

// Controller function for user login 
const loginUser = (req, res) => {
    const { username, password } = req.body;
    console.log(username)

    // Find the user by username
    User.loginUser(username, password, (error, foundUser) => {
        if (error) {
            console.error('Error finding user:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (!foundUser) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Generate a JWT token
        const token = jwt.sign(
            { userId: foundUser.id, username: foundUser.username },
            JWT_SECRET,
            { expiresIn: '48h' }
        );

        res.json({ message: 'User logged in successfully', token });
    });
};



// Controller function for getting users with filters
const getUsers = (req, res) => {
    const { date, sorting, department, } = req.query;

    // Construct the filters object
    const filters = {
        date,
        sorting,
        department,
        // Add more filters as needed
    };
    // Call the static method getUsers from the User model
    try {
        User.getUsers(filters, (error, users) => {
            if (error) {
                console.error('Error fetching users:', error);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            res.json({ users });
        });
    } catch (err) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }


}

module.exports = {
    registerUser,
    loginUser,
    getUsers,
};
