const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    subjectId: {
        type: Number,
        required: true,
        ref: 'Subject'
    },
    title: {
        type: String,
        required: true
    },
    questions: [{
        question: {
            type: String,
            required: true
        },
        options: [{
            type: String,
            required: true
        }],
        correctAnswer: {
            type: Number,
            required: true
        }
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Quiz', quizSchema); 