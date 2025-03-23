const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    difficulty: {
        type: String, enum: ['easy', 'medium', 'hard'], default : 'medium'},
        ingredients: [String],
        steps: [String],
});

module.exports = mongoose.model('Recipe', recipeSchema);