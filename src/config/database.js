import { DataSource } from "typeorm";
import Airport from "../entities/Airport.js";
import City from "../entities/City.js";
import Country from "../entities/Country.js";
import dotenv from "dotenv";

dotenv.config();

const connectDB = new DataSource({
  type: "mysql",
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Airport, City, Country],
});

export default connectDB;
