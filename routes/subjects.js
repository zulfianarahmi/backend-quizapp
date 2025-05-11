console.log('Subjects router loaded');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const authMiddleware = require('../middleware/auth');
const Material = require('../models/Material');
const Quiz = require('../models/Quiz');

// Read subjects data from subjects.json
const subjectsDataPath = path.join(__dirname, '../data/subjects.json');
let subjects = [];

try {
    const data = fs.readFileSync(subjectsDataPath, 'utf8');
    subjects = JSON.parse(data);
    console.log('Subjects loaded successfully:', subjects);
} catch (error) {
    console.error('Error reading subjects data:', error);
    // If there's an error, use default subjects
    subjects = [
        { id: 1, name: 'Matematika', description: 'Belajar matematika dasar dan lanjutan' },
        { id: 2, name: 'IPA', description: 'Belajar ilmu pengetahuan alam' },
        { id: 3, name: 'IPS', description: 'Belajar ilmu pengetahuan sosial' },
        { id: 4, name: 'Bahasa Indonesia', description: 'Belajar bahasa Indonesia' },
        { id: 5, name: 'Bahasa Inggris', description: 'Belajar bahasa Inggris' },
        { id: 6, name: 'Agama Islam', description: 'Belajar pendidikan agama Islam' }
    ];
    console.log('Using default subjects:', subjects);
}

// Get all subjects
router.get('/', authMiddleware, (req, res) => {
    console.log('Matched all subjects route');
    try {
        console.log('Sending subjects:', subjects);
        res.json(subjects);
    } catch (error) {
        console.error('Error in /subjects route:', error);
        res.status(500).json({ message: 'Error fetching subjects' });
    }
});

// Get subject by ID
router.get('/:id', authMiddleware, (req, res) => {
    console.log('Matched subject by ID route:', req.params.id);
    const subjectId = parseInt(req.params.id);
    const subject = subjects.find(s => s.id === subjectId);
    
    if (subject) {
        res.json(subject);
    } else {
        res.status(404).json({ message: 'Subject not found' });
    }
});

// Get material for a subject
router.get('/:id/material', authMiddleware, async (req, res) => {
    try {
        const material = await Material.findOne({ subjectId: req.params.id });
        if (!material) {
            return res.status(404).json({ message: 'Materi tidak ditemukan' });
        }
        res.json(material);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Get quiz for a subject
router.get('/:id/quiz', authMiddleware, async (req, res) => {
    try {
        const quiz = await Quiz.findOne({ subjectId: req.params.id });
        if (!quiz) {
            return res.status(404).json({ message: 'Quiz tidak ditemukan' });
        }
        res.json(quiz);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

// Add new material
router.post('/:id/material', authMiddleware, async (req, res) => {
    try {
        const { title, content } = req.body;
        const newMaterial = new Material({
            subjectId: req.params.id,
            title,
            content
        });
        await newMaterial.save();
        res.status(201).json(newMaterial);
    } catch (error) {
        res.status(500).json({ message: 'Gagal menambahkan materi' });
    }
});

// Add new quiz
router.post('/:id/quiz', authMiddleware, async (req, res) => {
    try {
        const { title, questions } = req.body;
        const newQuiz = new Quiz({
            subjectId: req.params.id,
            title,
            questions
        });
        await newQuiz.save();
        res.status(201).json(newQuiz);
    } catch (error) {
        res.status(500).json({ message: 'Gagal menambahkan quiz' });
    }
});

module.exports = router; 