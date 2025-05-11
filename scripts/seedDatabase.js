const mongoose = require('mongoose');
const config = require('../config');
const Material = require('../models/Material');
const Quiz = require('../models/Quiz');
const { initialMaterials, initialQuizzes } = require('../data/initialData');

const seedDatabase = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(config.mongoURI);
        console.log('Connected to MongoDB');

        // Clear existing data
        await Material.deleteMany({});
        await Quiz.deleteMany({});
        console.log('Cleared existing data');

        // Insert materials
        await Material.insertMany(initialMaterials);
        console.log('Inserted materials');

        // Insert quizzes
        await Quiz.insertMany(initialQuizzes);
        console.log('Inserted quizzes');

        console.log('Database seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase(); 