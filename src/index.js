import "reflect-metadata";
import express from "express";
import airportRoutes from "./routes/airportRoutes.js"
import connectDB from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDB.initialize()
  .then(() => {
    console.log("Database connected");

    app.use("/api/airport", airportRoutes);

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));
