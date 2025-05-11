const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const authMiddleware = require('../middleware/auth');

// Read materi data
const materiPath = path.join(__dirname, '../data/materi.json');
let materiData = {};

try {
  const data = fs.readFileSync(materiPath, 'utf8');
  materiData = JSON.parse(data);
} catch (error) {
  console.error('Error reading materi data:', error);
}

// Get learning materials by subject
router.get('/:pelajaran', authMiddleware, (req, res) => {
  const { pelajaran } = req.params;
  
  if (materiData[pelajaran]) {
    res.json(materiData[pelajaran]);
  } else {
    res.status(404).json({ message: 'Subject not found' });
  }
});

module.exports = router;
