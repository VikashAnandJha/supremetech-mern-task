const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
    const authorizationHeader = req.header('Authorization');

    if (!authorizationHeader) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    // Check if the token starts with 'Bearer'
    const [bearer, token] = authorizationHeader.split(' ');

    if (bearer !== 'Bearer' || !token) {
        return res.status(401).json({ message: 'Invalid token format' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.user = {
            id: decoded.userId,
            username: decoded.username,
        };

        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;
