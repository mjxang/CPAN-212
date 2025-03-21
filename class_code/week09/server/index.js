//IMPORTS
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRouter from './routers/book_router.js'; // router.books.function
import userRouter from './routers/user_router.js'; // router.books.function




//VARIABLES
dotenv.config();
const app = express();
const PORT = process.env.PORT || 6000;


//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//ROUTES


//STARTUP
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
        console.log('Connect to Database');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    });

    app.use("/books", bookRouter); 
    app.use("/users", userRouter); 