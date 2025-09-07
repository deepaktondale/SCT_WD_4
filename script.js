function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() === "") {
    alert("Please enter a task!");
    return;
  }

  // Create task item
  let li = document.createElement("li");

  let taskText = document.createElement("span");
  taskText.innerText = taskInput.value;

  // Action buttons
  let actions = document.createElement("div");
  actions.classList.add("actions");

  // Complete button
  let completeBtn = document.createElement("button");
  completeBtn.innerText = "✔";
  completeBtn.onclick = function () {
    li.classList.toggle("completed");
  };

  // Edit button
  let editBtn = document.createElement("button");
  editBtn.innerText = "📝";
  editBtn.onclick = function () {
    let newTask = prompt("Edit task:", taskText.innerText);
    if (newTask) taskText.innerText = newTask;
  };

  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "❌";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  actions.appendChild(completeBtn);
  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskText);
  li.appendChild(actions);

  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}