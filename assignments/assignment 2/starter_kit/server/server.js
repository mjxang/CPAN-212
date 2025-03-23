const express = require('express');
const mongoose = require('mongoose');
const recipesRouter = require('./routes/recipes');

const app = express();
const PORT = 8001;

//Middleware to parse JSON data
app.use(express.json());