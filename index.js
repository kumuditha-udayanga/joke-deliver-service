import express from "express";
import cors from "cors";
import { config } from "./config.js";
import {jokeRoutes} from "./src/routes/jokes.routes.js";
import {jokeTypeRoutes} from "./src/routes/jokeTypes.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Joke Delivery service"})
})

app.use("/api/deliver/jokes", jokeRoutes);
app.use("/api/deliver/joke-types", jokeTypeRoutes);


app.listen(config.PORT, () => {
    console.log(`Joke Delivery service running on port ${config.PORT}`);
});
