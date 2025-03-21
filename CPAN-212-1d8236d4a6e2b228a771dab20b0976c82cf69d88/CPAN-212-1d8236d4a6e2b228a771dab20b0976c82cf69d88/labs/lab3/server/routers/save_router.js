import express from "express";
import upload from "../middleware/multer.js"

const router = express.Router();

router.post("/single", (req, res) => {
  upload.single("file")(req, res, (err) => {
    console.log("Save endpoint called");
    
    if (err) {
      console.error("Multer error:", err);
      return res.status(400).json({
        error: err.message || "Error uploading file"
      });
    }

    if (!req.file) {
      console.error("No file in request");
      return res.status(400).json({
        error: "No file uploaded"
      });
    }

    try {
      console.log("File saved successfully:", req.file.filename);
      res.status(200).json({
        message: "File uploaded successfully",
        filePath: `/uploads/${req.file.filename}`,
        filename: req.file.filename
      });
    } catch (error) {
      console.error("Error saving file:", error);
      res.status(500).json({
        error: "Failed to save file",
        details: error.message
      });
    }
  });
});

export default router;
