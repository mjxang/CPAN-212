import express from "express";

const router = express.Router();

// checking if in route
router.get("/", (req, res) => {
  res.send("Welcome to the lab router!");
});

// name route
router.get("/name", (req, res) => {
  res.send("MJ Angeles");
});

// greetings
router.get("/greeting", (req, res) => {
  res.send("Hello from MJ, Student Number: N01615449");
});

// add
router.get("/add/:x/:y", (req, res) => {
  let x = parseFloat(req.params.x);
  let y = parseFloat(req.params.y);

  res.send(`${x + y}`);
});

// calculate
router.get("/calculate/:a/:b/:operation", (req, res) => {
  let a = parseFloat(req.params.a);
  let b = parseFloat(req.params.b);
  let operation = req.params.operation;
  let result = 0;

  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/": // %2f is the encoded value of /, so it should be used in the URL
    if (b === 0) {
        res.send("Error: You cannot divide by zero.");
    } else {
        result = a / b;
    }
      break;

    default:
      res.send("Invalid operator");
      break;
  }
  res.send(`${result}`);
});

export default router;
