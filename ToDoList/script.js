let userTask = document.getElementById("task");
let result = document.getElementById("result");
let button = document.querySelector("button");

function ToDoList() {
    let taskValue = userTask.value;

    if (taskValue === "") return;

    
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task-item");

    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add('checkbox');

    
    let taskText = document.createElement("span");
    taskText.textContent = taskValue;
    taskText.classList.add('task_text');

    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add('Delete'); 


    deleteBtn.addEventListener("click", function () {
        taskDiv.remove();
    });

    
    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteBtn);

    
    result.appendChild(taskDiv);

    
    userTask.value = "";
}

button.addEventListener("click", ToDoList);
