const inputText = document.querySelector("#todo");
const list = document.querySelector("ul");

function addTask() {
  if (!inputText.value) {
    alert("Please write something");
  } else {
    let li = document.createElement("li");
    let taskDiv = document.createElement("div");
    taskDiv.className =
      "flex items-center justify-between bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-all";

    let taskText = document.createElement("span");
    taskText.className = "text-gray-800 font-medium flex-1";
    taskText.textContent = inputText.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.className =
      "ml-4 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm transition-all";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function () {
      li.remove();
    };

    taskDiv.appendChild(taskText);
    taskDiv.appendChild(deleteBtn);
    li.appendChild(taskDiv);
    list.appendChild(li);
    inputText.value = "";
  }
}
