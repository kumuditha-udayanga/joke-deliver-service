import { pool } from "../db/connection.js";


export const createJoke = async(req, res) => {
    try {
        const { joke, type } = req.body;
        let query = `INSERT INTO jokes (joke_text, type_id) VALUES (?,?)`;

        if (!joke || !type) {
            return res.status(400).json({message: "All fields required"})
        }

        await pool.query(query, [joke, type]);

        return res.status(201).json({message: "Joke recorded successfully"});
    } catch (err) {
        res.json({message: err});
        console.error(err);
    }
};

// @return random joke based on the type
export const getRandomJokeFromType = async(req, res) => {
    try {
        const { type } = req.body;
        let query = `SELECT * FROM jokes WHERE type_id=? ORDER BY RAND() LIMIT 1`
        
        const [rows] = await pool.query(query, [type]);

        if (!rows.length) {
            return res.status(204).json({message: "empty list"});
        }

        return res.status(200).json({rows});
    } catch (err) {
        res.json({message: err});
        console.error(err);
    }
};



