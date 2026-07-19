# backend-engineering-lab


## Table of Contents

- [About](#About)
- [Design](#Design)
- [Tech Stack](#Tech-Stack)
- [Project Structure](#Project-Structure)
- [Getting Started](#Getting-Started)


## About
Backend Engineering Lab is a hands-on learning project where I implement the same backend concepts across multiple programming languages and frameworks to deepen my understanding of backend software engineering.

The goal is not simply to build CRUD APIs, but to practise production-oriented concepts including:

REST API design
Clean architecture
Database modelling
ORM usage
Docker
CI/CD pipelines
Automated testing
Authentication
Microservices
Cloud deployment

## Technology roadmap

- ✅ Node.js (Express)
- 🚧 Spring Boot
- 🚧 FastAPI
- 🚧 Go
- 🚧 ASP.NET Core


## Design

### Domain
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

### API Endpoints

The backend server will serve the following endpoints:

#### `POST /tasks`
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
    

#### `GET /tasks`
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
    

#### `GET /tasks/:id`
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


#### `PUT /tasks/:id`
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

#### `DELETE /tasks/:id`
- **Description**: Deletes a specific **Task** object with given id
- **Param**: `id` 
- **Returns**:
    - `200`: "Success. Task has been deleted."
    - `400`: "Bad request."
    - `404`: "Task not found."
    - `500`: "Internal server error."

## Tech Stack 
| Layer  | Technology | Purpose | 
| --- | --- | --- | 
| Framework | ① Express.js <br> ② Spring Boot <br>  ③ FastAPI | Backend frameworks |
| Language | ① Javascript <br> ② Java <br> ③ Python | - |
| ORM | ① Prisma | ① Database toolkit for Node.js |
| Database | PostgreSQL | Store `Task` data |
| Test Suites | ① Jest | ① Testing framework for Javascript

## Project Structure
Structure here implies overall folder layout of implemented API frameworks.

```css
backend-fundamentals
|   /* GitHub Actions CI */
├── .github/
|   └── workflows
|       └── ci.yaml
|
|   /* Backend Service : Node.js */
├── backend-service-nodejs/
|   ├── Dockerfile              
|   ├── app.js
|   ├── index.js
|   ├── routes/
|   |   └── taskRouter.js
|   ├── controllers/
|   |   └── taskController.js
|   ├── prisma/
|   |   ├── migrations/
|   |   |   /* Prisma client for DB access layer */
|   |   ├── prisma.js    
|   |   |   /* DB schema */     
|   |   └── schema.prisma       
|   └── database/
|       |   /* DB connector for healthcheck */
|       └── db.js               
|
|  /* Automation Scripts to start app */
├── scripts/
|   ├── dockerize.sh                    
|   └── migrate-and-deploy-schema.js
├── .gitignore
├── docker-compose.yml
└── README.md

```

## Getting Started

### Node.js Backend API 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)


#### Prerequisites
- Node.js >= v18.19.1
- npm >= 10.9.3

#### 1. Clone & Install

```bash
git clone git@github.com:SarahTWLin/backend-engineering-lab.git
cd backend-service-nodejs/
npm install
```

#### 2. Run Start

```bash
./scripts/dockerize.sh
```