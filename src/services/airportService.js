import connectDB from "../config/database.js";
import Airport from "../entities/Airport.js";

export const getAirportByIATACode = async (iata_code) => {
  const airportRepository = connectDB.getRepository(Airport);
  return await airportRepository.findOne({
    where: { iata_code },
    relations: ["city", "city.country"],
  });
};
