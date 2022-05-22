
var formEl = document.querySelector("#task-form");
var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {

    event.preventDefault();     // prevent default behavior causing page to refresh

    var taskNameInput = document.querySelector("input[name='task-name']").value;    // get value for input name
    var taskTypeInput = document.querySelector("select[name='task-type']").value;   // get value for selected type
    var listItemEl = document.createElement("li");  // Create a list item to be the listed task
    listItemEl.className = "task-item"; // adding class to list item
    var taskInfoEl = document.createElement("div"); // Create a div to hold the info
    taskInfoEl.className = "task-info"; // adding class to the info div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";  // providing html to the div to add inputs
    listItemEl.appendChild(taskInfoEl); // append info to list item
    tasksToDoEl.appendChild(listItemEl);// append list item to the list
  };

//buttonEl.addEventListener("click", createTaskHandler);
formEl.addEventListener("submit", createTaskHandler);