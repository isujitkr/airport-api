import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from 'url';
import connectDB from "./config/database.js";
import airportRoutes from "./routes/airportRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the "public" directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

const startServer = async () => {
  try {
    await connectDB.initialize();
    console.log("Database connected");

    // Use the imported routes
    app.use("/api/airport", airportRoutes);

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startServer();
