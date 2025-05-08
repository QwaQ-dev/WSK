import { Sequelize } from "sequelize";
import { DATABASE_CONFIG } from "../config/database.config.js";

export const { NAME, USERNAME, PASSWORD, DIALECT } = DATABASE_CONFIG;

export const DATABASE = new Sequelize(NAME, USERNAME, PASSWORD, {
    dialect: DIALECT
})