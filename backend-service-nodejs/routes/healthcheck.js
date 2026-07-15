const express = require('express');
const healthcheckRouter = express.Router();
const pool = require("../database/db");


healthcheckRouter.get('/api', (req, res, next) => {
    try {
        res.status(200).send({
            status: "OK"
        });
    }
    catch (err) {
        next(err); 
    }
});

healthcheckRouter.get('/db', async (req, res, next) => {
    try {
        const result = await pool.query('SELECT NOW();'); 
        console.log("HE::");
        
        res.status(200).send({
            status: "OK",
            timestamp: result.rows[0].now
        });
    }
    catch(err) {
        next(err);
    }
});

module.exports = [
    healthcheckRouter
]