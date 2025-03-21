import express from "express";
import Book from "../models/Book.js";

const router = express.Router();
//1 fetch all books
router.get("/", (req, res) => {
  Book.find().then((results) => {
    res.json(results);
  });
});

//2 fetch by id
router.get("/:id", (req, res) => {
  //1 fetch from db
  Book.findById(req.params.id).then((results) => {
    res.json(results);
  });
});

//3 search
router.get("/search", (req, res) => {
  const filters = {};

  //query
  if (req.query.title) {
    filters.title = req.query.title;
  }
  if (req.query.pages) {
    let pages = parseInt(req.query.pages);
    if (req.query.logicalOperators) {
      switch (req.query.logicalOperators) {
        case "gt":
          filters.pages = { $gt: { pages } };
          break;
        default:
          break;
      }
    }
  }
  Book.find({ filters }).then((results) => {
    res.json(results);
  });
});

//update
router.put("/:id", (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body).then(() => {
    res.json({
      message: "Book updated successfully",
    });
  });
});
//delete
router.delete("/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id).then(() => {
    res.json({
      message: "Book deleted successfully",
    });
  });
});
//create
router.post("/save", (req, res) => {
  const { title, author, publisher } = req.body;

  let newBook = new Book({
    title,
    author,
    publisher,
    page: 500,
  });

  newBook.save().then(() => {
    res.json({
      message: "Book created successfully",
    });
  });
});

export default router;
