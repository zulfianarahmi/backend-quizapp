// app.js
const express = require('express');
const cors = require('cors');
const config = require('./config');
const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: config.corsOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Import routes
const authRoutes = require('./routes/auth');
const quizRoutes = require('./routes/quiz');
const materiRoutes = require('./routes/materi');
const soalRoutes = require('./routes/soal');
const subjectsRoutes = require('./routes/subjects');

// Use routes with /api prefix
app.use('/api/auth', authRoutes);      // handles /api/auth/*
app.use('/api/quiz', quizRoutes);      // handles /api/quiz/*
app.use('/api/materi', materiRoutes);  // handles /api/materi/*
app.use('/api/soal', soalRoutes);      // handles /api/soal/*
app.use('/api/subjects', subjectsRoutes); // handles /api/subjects/*

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!', 
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Basic route to test if the server is running
app.get('/', (req, res) => {
  res.send('Hello, Quiz App Backend!');
});

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});