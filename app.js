// Variables
const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");
console.log(inputTask);
// Event listener for Add Button
addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");
  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.appendChild(li);
  let checkButton = document.createElement("button");
  checkButton.innerText = "Add";
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);
  if (inputTask.value === "") {
    alert("Please Enter a Task");
  } else {
    taskContainer.appendChild(task);
  }
  inputTask.value = "";
  checkButton.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });
  deleteButton.addEventListener("click", function (e) {
    // taskContainer.style.display = "none";
    let target = e.target;
    target.parentElement.remove();
  });
});
