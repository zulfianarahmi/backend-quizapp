const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');

// Protected quiz route
router.get('/quiz', authMiddleware, (req, res) => {
  res.json({ message: 'Welcome to the quiz!', user: req.user });
});

module.exports = router;
