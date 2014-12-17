//Problem: user interaction doesn't provide desired result!
//Solution: add interactivity that the user can manage daily task.

var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');


//Add a new task
var addTask = function () {
    console.log("add task! ..........")

}


//Edit an existing task
var editTask = function () {
    console.log("edit task ..........")
}



//Delete an existing task

var deleteTask = function () {
    console.log("delete task ......")
}


//Mark a task as complete

var taskCompleted = function () {
    console.log("taskCompleted .............")
}


//Mark a task as incomplete
var taskIncompleted = function () {
    console.log("task incomplete..........")
}


//set the click handler to the addtask function
addButton.onclick = addTask;