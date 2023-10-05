const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
require('dotenv').config()
const JWT_SECRET = process.env.JWT_SECRET
// Controller function for user registration

const registerUser = async (req, res) => {
    const { name, username, password, department } = req.body;
    const join_date = currentDate = new Date().toISOString().split('T')[0];

    try {
        // Check if the username is already taken
        User.findByUsername(username, async (error, foundUser) => {

            if (foundUser) {
                return res.status(400).json({ message: 'Username is already taken' });
            }
            if (error) {
                return res.status(500).json({ message: 'internal server error' });
            }

            // Hash the password before saving to the database
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new User instance
            const newUser = new User(null, name, username, hashedPassword, join_date, department);

            // Save the user to the database
            User.createUser(newUser, (error, savedUser) => {
                if (error) {
                    console.error('Error registering user:', error);
                    return res.status(500).json({ message: 'Internal Server Error' });
                }

                let user = { userId: savedUser.id, username: savedUser.username }
                // Generate a JWT token for the registered user
                const token = jwt.sign(user, JWT_SECRET, { expiresIn: '48h' });

                res.status(201).json({ message: 'User registered successfully', token, user });
            });
        });

    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// Controller function for user login 
const loginUser = (req, res) => {
    const { username, password } = req.body;

    // Find the user by username
    User.findByUsername(username, (error, foundUser) => {
        if (error) {
            console.error('Error finding user:', error);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        if (!foundUser) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the stored hashed password
        bcrypt.compare(password, foundUser.password, (compareError, isMatch) => {
            if (compareError) {
                console.error('Error comparing passwords:', compareError);
                return res.status(500).json({ message: 'Internal Server Error' });
            }

            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid credentials' });
            }

            let user = { userId: foundUser.id, username: foundUser.username }
            // Passwords match, generate a JWT token
            const token = jwt.sign(
                user,
                JWT_SECRET,
                { expiresIn: '48h' }
            );

            res.json({ message: 'User logged in successfully', token, user });
        });
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
