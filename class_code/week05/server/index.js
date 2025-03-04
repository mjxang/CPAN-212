
 import express from "express"; // if you are using type: module
 import cors from "cors";

const express = require("express"); // if using common JS (Default)
 
const app = express();
const PORT = process.env.PORT || 8000;
 
// middlelware
app.use(cors());
app.use(express.urlencoded ({ extended: true }));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

//send data
app.get("/data", (req, res) => {
  const data = {
    fname: "John",
    lname: "Doe",
  }
  res.send(data);
});

app.post ("/login", (req, res) => {
  console.log(req.body); 
  res.send("I stole your data");
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
 
app.use("", (req, res) => {
  res.status(404).send("Page not found");
});