const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
    alert("Por favor, digite uma tarefa!");
    return;
    }

    const li = document.createElement("li");
li.textContent = taskText;

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Excluir"
deleteBtn.classList.add("delete-btn");

deleteBtn.addEventListener("click", () => {
    li.remove();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = ""
}
addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
    addTask();
    }
    });