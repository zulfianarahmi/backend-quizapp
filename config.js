module.exports = {
    jwtSecret: 'your-secret-key', // In production, use environment variable
    port: process.env.PORT || 3000,
    corsOrigins: ['http://localhost:5173', 'http://127.0.0.1:5173']
}; 