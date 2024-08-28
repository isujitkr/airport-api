import express from "express";
import { fetchAirportByIataCode } from "../controllers/airportController.js";

const router = express.Router();

router.get("/:iata_code", fetchAirportByIataCode);

export default router;