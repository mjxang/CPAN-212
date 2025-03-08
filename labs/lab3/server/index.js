import express from "express";
import cors from "cors";
import save_router from "./routers/save_router.js";
import fetch_router from "./routers/fetch_router.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000; // Changed to 3000 to avoid conflict with Vite

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// routes
app.use("/save", save_router);
app.use("/fetch", fetch_router);

app.get("/", (req, res) => {
  res.json({ message: "Server is running" });
});

app.get("/api-list", (req, res) => {
  const apiList = {
    save_routes: ["/save/single", "/save/multiple", "/save/dog"],
    fetch_routes: ["/fetch/single", "/fetch/multiple"],
    static_routes: ["/uploads/:filename"]
  };
  res.json(apiList);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: err.message || 'Internal server error' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const server = app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please try a different port.`);
    process.exit(1);
  } else {
    console.error('Server error:', err);
  }
});
