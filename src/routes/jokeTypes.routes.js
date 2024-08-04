import express from "express";
import { createJokeType, getJokeTypes } from "../controllers/jokeTypes.controller.js";

export const jokeTypeRoutes = express.Router();

jokeTypeRoutes.route("/").post(createJokeType);

jokeTypeRoutes.route("/").get(getJokeTypes);
