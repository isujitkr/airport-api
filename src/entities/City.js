import { EntitySchema } from "typeorm";
import Country from "./Country.js";

export default new EntitySchema({
  name: "City",
  tableName: "city",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true,
    },
    name: {
      type: "varchar",
    },
    is_active: {
      type: "boolean",
    },
    lat: {
      type: "double",
    },
    longt: {
      type: "double",
    },
  },
  relations: {
    country: {
      type: "many-to-one",
      target: Country,
      joinColumn: {
        name: "country_id",
      },
    },
  },
});
