import express from 'express';
import lab_router from './routers/lab_router.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/lab", lab_router);

app.get("/", (req, res) => {
    res.send("Welcome to the server!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});