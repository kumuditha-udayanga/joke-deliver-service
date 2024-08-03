import mysql from "mysql2";
import { config } from "../../config.js";

// Create database connection
export const pool = mysql.createPool({
    host: "localhost",
    database: "jokes_db",
    user: "root",
    password: "root"
}).promise();


