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


const getTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await taskControllers.getTaskById(id);

        res.status(200).send({
            "task": task
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

const deleteTask = async (req, res, next) => {
    try {
        const { id } = req.params;
        const results = taskControllers.deleteTask(id);

        res.status(201).send({
            status: `Task ${id} deleted.`
        });
    }
    catch (err) {
        next(err);
    }
}


module.exports = {
    getTaskList,
    getTask,
    createTask,
    deleteTask
}