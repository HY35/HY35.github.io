const todoTask = document.querySelector("#todo-task");
const saveButton = document.querySelector("#save-btn");
const taskList = document.querySelector("#task-list");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed; // Load the completed status from local storage
    checkbox.addEventListener("change", () => onCheckboxChange(index));
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task.text));
    li.innerHTML += ` <button data-index="${index}" class="delete-btn">Delete</button>`;
    taskList.appendChild(li);
  });

  const deleteButtons = document.querySelectorAll(".delete-btn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", onDeleteClick);
  });
}

function onSaveClick() {
  const taskText = todoTask.value.trim();
  if (taskText === "") return;

  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const newTask = { text: taskText, completed: false }; // Each task has a text and completed status
  tasks.push(newTask);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  todoTask.value = "";
  loadTasks();
}

function onDeleteClick(e) {
  const index = e.target.getAttribute("data-index");
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function onCheckboxChange(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks[index].completed = !tasks[index].completed; // Toggle the completed status
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

saveButton.addEventListener("click", onSaveClick);
loadTasks();
