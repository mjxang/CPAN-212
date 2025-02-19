import express from "express";
import fs from "fs";
import path from "path";
import _ from "lodash";
import { fileURLToPath } from "url"; // for file path

const router = express.Router();

// grab the current directory to this file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // this will link us to the router folder
// we need to move from /server/routers to /server/uploads
const upload_directory = path.join(__dirname, "../uploads");

// Ensure uploads directory exists
if (!fs.existsSync(upload_directory)) {
  fs.mkdirSync(upload_directory, { recursive: true });
}

// Helper function to get all image files
const getImageFiles = () => {
  try {
    return fs.readdirSync(upload_directory).filter(file => 
      file.match(/\.(jpg|jpeg|png|gif|svg)$/i)
    );
  } catch (error) {
    console.error("Error reading directory:", error);
    return [];
  }
};

router.get("/single", (req, res) => {
  console.log("Fetching single random image...");
  try {
    const files = getImageFiles();
    console.log("Available files:", files);

    if (files.length === 0) {
      console.log("No images found");
      res.setHeader('Content-Type', 'application/json');
      return res.status(404).json({
        error: "No images available"
      });
    }

    const filename = _.sample(files);
    console.log("Selected file:", filename);
    
    const filePath = path.join(upload_directory, filename);
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error("Error sending file:", err);
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({ error: "Error sending file" });
      } else {
        console.log("File sent successfully:", filename);
      }
    });
  } catch (error) {
    console.error("Error in /single route:", error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/multiple", (req, res) => {
  console.log("Fetching multiple random images...");
  try {
    const files = getImageFiles();
    console.log("Available files:", files);

    if (files.length === 0) {
      console.log("No images found");
      res.setHeader('Content-Type', 'application/json');
      return res.status(404).json({
        error: "No images available"
      });
    }

    const selectedFiles = _.sampleSize(files, Math.min(3, files.length));
    console.log("Selected files:", selectedFiles);
    
    res.setHeader('Content-Type', 'application/json');
    res.json({ filenames: selectedFiles });
  } catch (error) {
    console.error("Error in /multiple route:", error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/file/:filename", (req, res) => {
  const filename = req.params.filename;
  console.log("Fetching specific file:", filename);

  try {
    const filePath = path.join(upload_directory, filename);
    
    if (!fs.existsSync(filePath)) {
      console.log("File not found:", filename);
      res.setHeader('Content-Type', 'application/json');
      return res.status(404).json({ error: "File not found" });
    }

    res.sendFile(filePath, (err) => {
      if (err) {
        console.error("Error sending file:", err);
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({ error: "Error sending file" });
      } else {
        console.log("File sent successfully:", filename);
      }
    });
  } catch (error) {
    console.error("Error in /file/:filename route:", error);
    res.setHeader('Content-Type', 'application/json');
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router;
