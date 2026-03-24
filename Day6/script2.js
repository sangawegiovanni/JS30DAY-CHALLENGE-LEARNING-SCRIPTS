let tasks = []; // store tasks in memory

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push(task); // add to array
    taskInput.value = ""; // clear input
    renderTasks();
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // clear list

    for (let i = 0; i < tasks.length; i++) {
        let li = document.createElement("li");
        li.textContent = tasks[i];

        // delete button
        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";
        delBtn.onclick = function() {
            tasks.splice(i, 1); // remove task
            renderTasks(); // refresh
        };

        li.appendChild(delBtn);
        taskList.appendChild(li);
    }
}