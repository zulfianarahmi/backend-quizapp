const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    subjectId: {
        type: Number,
        required: true,
        ref: 'Subject'
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Material', materialSchema); 