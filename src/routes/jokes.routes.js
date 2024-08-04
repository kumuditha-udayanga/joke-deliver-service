import express from "express";
import { createJoke, getRandomJokeFromType } from "../controllers/jokes.controller.js";

export const jokeRoutes = express.Router();

jokeRoutes.route("/").post(createJoke);

jokeRoutes.route("/:id").get(getRandomJokeFromType);
