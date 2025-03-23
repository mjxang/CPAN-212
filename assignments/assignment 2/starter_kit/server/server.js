const express = require('express');
const mongoose = require('mongoose');
const recipesRouter = require('./routes/recipes');

const app = express();
const PORT = 8001;

require('dotenv').config();


//Middleware to parse JSON data
app.use(express.json());

//connecting to mongodb
mongoose.connect('mongodb://localhost:27017/recipes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

//using the recipes router
app.use('/recipes', recipesRouter);

app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
