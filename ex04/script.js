
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function updateTaskCount() {
    taskCount.textContent = taskList.children.length;
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    const task = document.createElement("span");
    const deleteButton = document.createElement("button");

    task.textContent = taskText;
    task.classList.add("task-text");

    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");

    task.addEventListener("click", function () {
        task.classList.toggle("completed");
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
        updateTaskCount();
    });

    li.appendChild(task);
    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = "";
    updateTaskCount();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
