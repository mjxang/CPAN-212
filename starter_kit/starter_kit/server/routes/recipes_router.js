const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

// GET all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET single recipe by ID
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST new recipe
router.post('/', async (req, res) => {
    const recipe = new Recipe({
        name: req.body.name,
        description: req.body.description,
        difficulty: req.body.difficulty,
        ingredients: req.body.ingredients,
        steps: req.body.steps
    });

    try {
        const newRecipe = await recipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT (update) recipe
router.put('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }

        recipe.name = req.body.name;
        recipe.description = req.body.description;
        recipe.difficulty = req.body.difficulty;
        recipe.ingredients = req.body.ingredients;
        recipe.steps = req.body.steps;

        const updatedRecipe = await recipe.save();
        res.json(updatedRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE recipe
router.delete('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        await recipe.deleteOne();
        res.json({ message: 'Recipe deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
