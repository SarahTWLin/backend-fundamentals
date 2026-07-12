
function getTaskList() {
    const sampleData = [
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
    return sampleData;
}

function getTaskById(taskId) {
    const task = getTaskList().find((task) => task.id === taskId);
    
    return task;
}


module.exports = 
{ 
    getTaskList,
    getTaskById 
}