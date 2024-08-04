import { pool } from "../db/connection.js";

// create  joke type
export const createJokeType = async(req, res) => {
    try {
        const { type } = req.body;
        let query = `INSERT INTO joke_types (type) VALUES (?)`;
        
        if (!type) {
            return res.status(400).json({message: "All fields required"})
        }

        await pool.query(query, [type]);

        return res.status(201).json({message: `Joke type ${type} added recorded successfully`});
    } catch (err) {
        res.json({message: err});
        console.error(err);
    }
};

// get joke types 
export const getJokeTypes = async(req, res) => {
    try {
        const { type } = req.body;
        let query = `SELECT * FROM joke_types`
        
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
