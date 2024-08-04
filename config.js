import dotenv from "dotenv";

dotenv.config();

export const config = {
    PORT: process.env.port,
    HOST: process.env.host,
    USER: process.env.user,
    PASSWORD: process.env.password,
    DB: process.env.db
}
