const prisma = require('../prisma/prisma');
const { NotFoundError, BadRequestError } = require('../utils/errors');

async function getTaskList() {
    const tasks = await prisma.task.findMany();
    return tasks;
}

async function getTaskById(taskId) {

    if (parseInt(taskId) <= 0) {
        throw new BadRequestError("Invalid task ID");
    }
    
    const task = await prisma.task.findUnique({
        where: {
            id: parseInt(taskId)
        }
    });

    if (!task) {
        throw new NotFoundError("Task not found");
    }

    return task;
}

async function createTask(task) {

    if (task.completed !== false || task.completed !== true) {
        throw new BadRequestError("Invalid task status; completed must be true or false");
    }

    const result = await prisma.task.create({
        data: {
            ...task
        }
    });
    
    return result;
}

async function deleteTask(taskId) {

    if (parseInt(taskId) <= 0) {
        throw new BadRequestError("Invalid task ID");
    }

    const results = await prisma.task.delete({
        where: {
            id: parseInt(taskId)
        }
    });

    return results;
}


module.exports = 
{ 
    getTaskList,
    getTaskById,
    createTask,
    deleteTask
}