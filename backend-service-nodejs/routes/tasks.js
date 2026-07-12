const express = require("express");
const taskRouter = express.Router();
const taskControllers = require("../controllers/tasks-controller");

taskRouter.get('/', (req, res, next) => { 
    
    try {
        const taskList = taskControllers.getTaskList();

        res.status(200).send({
            tasks: taskList
        });
    }
    catch (err) {
        next(err);
    }
    
});


taskRouter.get("/:id", (req, res, next) => {
    try {
        const taskId = req.params.id;
        const task = taskControllers.getTaskById(taskId);

        res.status(200).send({
            task: task
        })
    }
    catch (err) {
        next(err);

    }
});


module.exports = [
    taskRouter,
]