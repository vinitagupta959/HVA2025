let inputTask = document.getElementById("inputTask");
let priority = document.getElementById("selectPriority");
let addBtn = document.getElementById("addBtn");
let filter = document.getElementById("filter");
let sortBtn = document.getElementById("sortBtn");
let taskListSection = document.getElementById("taskListSection");
let taskList = [];
class Task {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
    this.status = "pending";
  }
  toggleStatus() {
    if (this.status == "pending") {
      this.status = "completed";
    } else {
      this.status = "pending";
    }
  }

  delete(arr) {
    const index = arr.indexOf(this);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }
}

addBtn.addEventListener("click", function () {
  let task = new Task(inputTask.value, priority.value);
  let found = false;
  taskList.forEach(function (oldTask) {
    if (task.name.toLowerCase() == oldTask.name.toLowerCase()) {
      found = true;
    }
  });
  if (!found) {
    taskList.push(task);
  }
  displayTasklist(taskList);
  inputTask.value = "";
  priority.value = "";
});

sortBtn.addEventListener("click", function () {
  let highTask = [];
  let mediumTask = [];
  let lowTask = [];
  taskList.forEach(function (task) {
    if (task.priority.toLowerCase() == "high") {
      highTask.push(task);
    } else if (task.priority.toLowerCase() === "medium") {
      mediumTask.push(task);
    } else {
      lowTask.push(task);
    }
  });

  let sortTask = [...highTask, ...mediumTask, ...lowTask];
  displayTasklist(sortTask);
});

function displayTasklist(arr) {
  taskListSection.innerHTML = "";
  if (arr.length === 0) {
    taskListSection.innerHTML = `<p>No tasks</p>`;
  } else {
    arr.forEach(function (task) {
      taskListSection.innerHTML += `
<div>
  <p>Task Name: ${task.name}</p>
  <p>Priority: ${task.priority}</p>
  <p>Status: ${task.status}</p>
  <button class="toggleBtn">Toggle Status</button>
  <button class="deleteBtn">Delete</button>
</div>`;
    });
  }

  let alltoggleBtn = document.querySelectorAll(".toggleBtn");
  let alldeleteBtn = document.querySelectorAll(".deleteBtn");

  alltoggleBtn.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      arr[index].toggleStatus();
      displayTasklist(taskList);
    });
  });
  alldeleteBtn.forEach(function (btn, index) {
    btn.addEventListener("click", function () {
      arr[index].delete(taskList);
      displayTasklist(taskList)
    });
  });
}

filter.addEventListener("change", function () {
  let selected = filter.value.toLowerCase();
  let selectedFilter = [];
  if (selected == "all" || selected == "") {
    displayTasklist(taskList);
  } else {
    taskList.forEach(function (task) {
      if (task.status.toLowerCase() === selected) {
        selectedFilter.push(task);
      }
    });
    displayTasklist(selectedFilter);
  }
});
