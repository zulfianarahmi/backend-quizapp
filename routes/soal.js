const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const authMiddleware = require('../middleware/auth');

// Read soal data
const soalPath = path.join(__dirname, '../data/soal.json');
let soalData = {};

try {
  const data = fs.readFileSync(soalPath, 'utf8');
  soalData = JSON.parse(data);
} catch (error) {
  console.error('Error reading soal data:', error);
}

// Get quiz questions by sub-topic
router.get('/soal/:submateri', authMiddleware, (req, res) => {
  const { submateri } = req.params;
  
  if (soalData[submateri]) {
    res.json(soalData[submateri]);
  } else {
    res.status(404).json({ message: 'Sub-topic not found' });
  }
});

module.exports = router;
