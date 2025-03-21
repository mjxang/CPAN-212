const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const recipeRouter = require('./routes/recipes_router');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = 8001;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
    res.json({ message: 'Recipe API Server is running' });
});

// Routes
app.use('/recipe', recipeRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message);
    res.status(500).json({ message: 'Something went wrong!' });
});

// Connect to MongoDB and start server
console.log('Connecting to MongoDB Atlas...');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Successfully connected to MongoDB Atlas');
    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
        console.log('Press Ctrl+C to stop the server');
    });
})
.catch((error) => {
    console.error('Failed to connect to MongoDB:', error.message);
    process.exit(1);
});
