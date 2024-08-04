import mysql from "mysql2";
import { config } from "../../config.js";
import dotenv from "dotenv";

dotenv.config();

// Create database connection
export const pool = mysql.createPool({
    host: config.HOST,
    database: config.DB,
    user: config.USER,
    password: "root"
}).promise();


