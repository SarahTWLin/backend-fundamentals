# backend-fundamentals
Backend engineering with Node.js, Java Springboot, and Python FastAPI with SQL polishing. Scope of work covers:

- Design and implementation of RESTful CRUD APIs using Node.js (Express), Java (SpringBoot), and Python (FastAPI)
- Focus on request validation, error handling, and layered service architecture
- Integrate SQL-backend persistence with filtering and pagination to support scalable read operations

## Node.js Backend API 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

### Design

#### Domain
The backend server serves RESTFUL APIs for a task management system, which allows the client to:

- Create a task
- Get a task based on specific task ID or a list of tasks
- Update a task's information based on specific task ID
- Delete a task based on specific task ID

The task management consists of the following object(s):

- **Task**: a scoped activity which a user will complete


     
| Field  | Description | Type | Example | 
| --- | --- | --- | --- |
|   id | Unique number to differentiate each **Task** object | `int` | 1
| title | Name of the **Task** object | `string` | Task1
| description | Elaborated details of the **Task** object | `string` | To work at a consistent pace
| status | Completion status of **Task** object | `string` | `todo`, `in-progress`, `done`
| createdAt | When the **Task** object was created | `datetime` | `2025-12-25 12:00:00`
| updatedAt | When the **Task** object (details) were updated | `datetime` | `2025-12-25 12:01:00`

#### API Endpoints

The backend server will serve the following endpoints:

##### `POST /tasks`
- **Description**: Creates a new **Task** object
- **Body-Content**: 

    ```json
    {
        "title": "Task1",
        "description": "First task",
        "status": "[todo|in-progress|done]",
        "createdAt": "<current time>",
        "updatedAt": "<updated time>"
    }
    ```
- **Returns**:
    - `200`: "Success. Task created."
    - `400`: "Bad request."
    - `500`: "Internal server error."
    

##### `GET /tasks`
- **Description**: Gets the list of **Task** objects that the user created
- **Returns**:
    - `200`: "Success"

        Example output:

        ```json
        [
            {
                "id": 1,
                "title": "Task1",
                "description": "First task",
                "status": "todo"
            },
            {
                "id": 2,
                "title": "Task2",
                "description": "Second task",
                "status": "in-progress"
            }
        ]
        ```

    - `500`: "Internal server error."
    

##### `GET /tasks/:id`
- **Description**: Gets a specific **Task** object with given id
- **Param**: `id` 
- **Returns**:
    - `200`: "Success"

        Example output:

        ```json
        {
            "id": 1,
            "title": "Task1",
            "description": "First task",
            "status": "todo"
        },
        ```

    - `400`: "Bad request."
    - `404`: "Task not found."
    - `500`: "Internal server error."


##### `PUT /tasks/:id`
- **Description**: Updates field(s) of specific **Task** object with given id
- **Param**: `id` 
- **Body-Content** (updateable fields): 

    ```json
    {
        "title": "Task1",
        "description": "First task",
        "status": "[todo|in-progress|done]"
    }
    ```
- **Returns**:
    - `200`: "Success. Task has been updated."
    - `400`: "Bad request."
    - `404`: "Task not found."
    - `500`: "Internal server error."

##### `DELETE /tasks/:id`
- **Description**: Deletes a specific **Task** object with given id
- **Param**: `id` 
- **Returns**:
    - `200`: "Success. Task has been deleted."
    - `400`: "Bad request."
    - `404`: "Task not found."
    - `500`: "Internal server error."


#### Code Structure

```css
src/
├── index.js
├── routes/
|   └── taskRouter.js
├── controllers/
|   └── taskController.js
├── models/
|   └── taskModel.js
└── data/
    └── store.js
```