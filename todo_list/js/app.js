//Problem: user interaction doesn't provide desired result!
//Solution: add interactivity that the user can manage daily task.

var taskInput = document.getElementById('new-task');
var addButton = document.getElementsByTagName('button')[0];
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');

//new Task List Item
var createNewTaskElement = function(taskString) {
    //create a list item
    var listItem = document.createElement("li");

    //input (checkbox)
    var checkbox = document.createElement("input");

    //label
    var label = document.createElement("label");

    //input (text)
    var editInput = document.createElement("input");

    //button.edit
    var editButton = document.createElement("button");

    //button.delete
    var deleteButton = document.createElement("button");

    //precise type or attribute for each element

    checkbox.type = "checkbox"
    editInput.type = "text"

    editButton.innerText = "Edit"
    editButton.className = "edit"
    deleteButton.innerText = "Delete"
    deleteButton.className = "delete"

    label.innerText = taskString



    listItem.appendChild(checkbox)
    listItem.appendChild(label)
    listItem.appendChild(editInput)
    listItem.appendChild(editButton)
    listItem.appendChild(deleteButton)

    return listItem;

}

//Add a new task
var addTask = function () {
    console.log("add task! ..........");
    //create a new list Item with the text from #new-task
    var listItem = createNewTaskElement(taskInput.value);

    //Append list item to the incompleteTasksHolder
    incompleteTasksHolder.appendChild(listItem);


    bindTaskEvents(listItem,taskCompleted)

    taskInput.value = "";


}


//Edit an existing task
var editTask = function () {
    console.log("edit task ..........")
    var listItem = this.parentNode
    var editInput = listItem.querySelector("input[type=text]")
    var label = listItem.querySelector("label")

//    if the class of the parent is .editMode
var containsClass = listItem.classList.contains("editMode")
    if(containsClass) {
        label.innerText = editInput.value
    }else {
        editInput.value = label.innerText;
    }
    listItem.classList.toggle("editMode")
 }



//Delete an existing task

var deleteTask = function () {
    console.log("delete task ......")
//    remove the parent list item from the ul
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}


//Mark a task as complete

var taskCompleted = function () {
    console.log("taskCompleted .............");
    //append the task list to the completed-tasks
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskIncompleted)
}


//Mark a task as incomplete
var taskIncompleted = function () {
    console.log("task incomplete..........");
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem,taskCompleted)
}


var bindTaskEvents = function (taskListItem,checkboxEventHandler) {
    console.log("bind list item there");
    //select task item childreen
    var checkBox = taskListItem.querySelector('input[type=checkbox]');
    var editButton = taskListItem.querySelector('button.edit');
    var deleteButton = taskListItem.querySelector('button.delete');

    //bind edit button to edit task
    editButton.onclick = editTask;

    //bind delete button to delete task
    deleteButton.onclick = deleteTask;

    //bind checkboxEvent Handler to checkbox
    checkBox.onchange = checkboxEventHandler

};

var ajaxRequest = function() {
    console.log("AJAX request")
}



//set the click handler to the addtask function
addButton.addEventListener('click',addTask)
addButton.addEventListener('click',ajaxRequest)




//cycle over incomplete list item
for(var i = 0 ; i < incompleteTasksHolder.children.length; i++) {
    bindTaskEvents(incompleteTasksHolder.children[i],taskCompleted)

}


//cycle over completed list item
for(var i = 0 ; i < completedTasksHolder.children.length; i++) {
    bindTaskEvents(completedTasksHolder.children[i],taskIncompleted)

}