const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const authMiddleware = require('../middleware/auth');

// Secret key for JWT
const JWT_SECRET = 'your-secret-key';

// Read user data from user.json
const userDataPath = path.join(__dirname, '../data/user.json');
let users = [];

try {
  const data = fs.readFileSync(userDataPath, 'utf8');
  users = JSON.parse(data);
} catch (error) {
  console.error('Error reading user data:', error);
  // If there's an error, default to an empty array
  users = [];
}

// Login route
router.post('/login', (req, res) => {
  console.log('Login attempt received:', req.body); // Debug log
  const { email, password } = req.body;

  // Check if the user exists and the password is correct
  const user = users.find(u => u.email === email && u.password === password);
  console.log('User found:', user ? 'Yes' : 'No'); // Debug log

  if (user) {
    // If the user is found, create a JWT token
    const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    console.log('Login successful, token generated'); // Debug log
    res.json({ 
      message: 'Login successful!', 
      token,
      user: {
        email: user.email
      }
    });
  } else {
    console.log('Login failed: Invalid credentials'); // Debug log
    res.status(401).json({ message: 'Invalid email or password' });
  }
});

// Logout route
router.post('/logout', authMiddleware, (req, res) => {
  try {
    // In a real app, you might want to blacklist the token
    // For now, we'll just send a success message
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error during logout' });
  }
});

module.exports = router;
