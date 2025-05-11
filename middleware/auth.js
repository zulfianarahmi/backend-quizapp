const jwt = require('jsonwebtoken');
const config = require('../config');

// Middleware to verify JWT token
const authMiddleware = (req, res, next) => {
  console.log('Auth middleware called');
  console.log('Request headers:', req.headers);
  
  // Get token from header
  const token = req.header('Authorization')?.replace('Bearer ', '');
  console.log('Token:', token);

  // Check if no token
  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret);
    console.log('Token decoded:', decoded);
    
    // Add user from payload
    req.user = decoded;
    next();
  } catch (err) {
    console.error('Token verification error:', err);
    return res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = authMiddleware;
