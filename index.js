const inputText = document.querySelector("#todo");
const list = document.querySelector("ul");
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    let taskDiv = document.createElement("div");
    taskDiv.className =
      "flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all";

    let taskText = document.createElement("span");
    taskText.className = "text-gray-800 font-medium flex-1";
    taskText.textContent = task;

    let editBtn = document.createElement("button");
    editBtn.className =
      "ml-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm transition-all";
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
      editTask(index, taskText);
    };

    let deleteBtn = document.createElement("button");
    deleteBtn.className =
      "ml-2 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm transition-all";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    };

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(editBtn);
    taskDiv.appendChild(deleteBtn);
    li.appendChild(taskDiv);
    list.appendChild(li);
  });
}

function editTask(index, taskSpan) {
  let newText = prompt("Edit your task:", tasks[index]);
  if (newText && newText.trim()) {
    tasks[index] = newText.trim();
    saveTasks();
    renderTasks();
  }
}

function addTask() {
  if (!inputText.value.trim()) {
    alert("Please write something");
  } else {
    tasks.push(inputText.value.trim());
    saveTasks();
    renderTasks();
    inputText.value = "";
  }
}

renderTasks();
