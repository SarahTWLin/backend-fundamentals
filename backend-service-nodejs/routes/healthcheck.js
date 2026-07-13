const express = require('express');
const healthcheckRouter = express.Router();

healthcheckRouter.get('/', (req, res, next) => {
    try {
        res.status(200).send({
            status: "OK"
        });
    }
    catch (err) {
        next(err); 
    }
});

module.exports = [
    healthcheckRouter
]