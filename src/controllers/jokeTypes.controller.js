import { pool } from "../db/connection.js";


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

// @return add joke types (todo order with date latest first)
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
