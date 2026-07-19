const express = require("express");
const taskRouter = express.Router();
const validate = require("../middleware/validate");
const { createTaskSchema } = require("../validators/task-validator");

const { getTaskList, getTask, createTask } = require("../controllers/tasks");

/**
 * @swagger
 * /tasks/v1/:
 *   get:
 *     summary: Get all tasks
 *     tags:
 *       - Tasks
 *     responses:
 *       200:
 *         description: Successfully retrieved tasks
 */
taskRouter.get('/', getTaskList);

/**
 * @swagger
 * /tasks/v1/{id}:
 *   get:
 *     summary: Get task by ID
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved tasks
 */
taskRouter.get("/:id", getTask);

/**
 * @swagger
 * /tasks/v1/:
 *   post:
 *     summary: Create a new task
 *     tags:
 *       - Tasks
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       201:
 *         description: Task created successfully
 */
taskRouter.post(
    "/",
    validate(createTaskSchema), 
    createTask
);

module.exports = taskRouter;