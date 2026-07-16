const taskControllers = require("../services/tasks-service");

const getTaskList = async (req, res, next) => { 
    
    try {
        const taskList = await taskControllers.getTaskList();

        res.status(200).send({
            tasks: taskList
        });
    }
    catch (err) {
        next(err);
    }
    
};


const getTask = (req, res, next) => {
    try {
        const taskId = req.params.id;
        const task = taskControllers.getTaskById(taskId);

        res.status(200).send({
            task: task
        });
    }
    catch (err) {
        next(err);

    }
};

const createTask = (req, res, next) => {
    try {
        const newTask = req.body;
        const results = taskControllers.createTask(newTask);

        res.status(201).send({
            task: results
        });
    }
    catch (err) {
        next(err);
    }
};


module.exports = {
    getTaskList,
    getTask,
    createTask
}