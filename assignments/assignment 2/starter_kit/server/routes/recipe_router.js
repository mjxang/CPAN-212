const express = require("express");
const Recipe = require("../models/recipes");
const router = express.Router();

//GET -  Get all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//POST - Create a new recipe
router.post("/", async (req, res) => {
  const recipe = new Recipe({
    name: req.body.name,
    description: req.body.description,
    difficulty: req.body.difficulty,
    ingredients: req.body.ingredients,
    steps: req.body.steps,
  });

  try {
    const newRecipe = await recipe.save();
    res.status(201).json(newRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//GET - Get a recipe by ID
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//PUT - Update a recipe by ID
router.put("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    if (req.body.name) recipe.name = req.body.name;
    if (req.body.description) recipe.description = req.body.description;
    if (req.body.difficulty) recipe.difficulty = req.body.difficulty;
    if (req.body.ingredients) recipe.ingredients = req.body.ingredients;
    if (req.body.steps) recipe.steps = req.body.steps;

    const updatedRecipe = await recipe.save();
    res.json(updatedRecipe);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//DELETE - Delete a recipe by ID
router.delete("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    await recipe.remove();
    res.json({ message: "Recipe deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
