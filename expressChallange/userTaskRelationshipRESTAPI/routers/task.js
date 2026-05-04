const express = require("express");
const router = express.Router();
const { users, tasks } = require("../data/memory");
const {
  userIdValidation,
  taskBodyValidation,
} = require("../middleware/taskAuth");

router.post(
  "/:userId/tasks",
  userIdValidation,
  taskBodyValidation,
  function (req, res) {
    let id = tasks.length + 1;
    let userId = req.params.userId * 1;
    let { title, completed } = req.body;
    let newTask = {
      id,
      title,
      completed,
      userId,
    };
    tasks.push(newTask);
    res.status(201).json({
      success: true,
      data: newTask,
      message: "New task added",
    });
  },
);

router.get("/:userId/tasks", userIdValidation, function (req, res) {
   let userId = req.params.userId * 1;
let userTasks = tasks.filter(function(task){
    return task.userId === userId
});
  res.status(200).json({
    success: true,
    data: userTasks,
    message: "All tasks fetched",
  });
});

router.get("/:userId/tasks/:taskId", userIdValidation, function (req, res) {
  let userId = req.params.userId * 1;
  let taskId = Number(req.params.taskId);
  let task = tasks.find(function (task) {
    return task.id === taskId && task.userId === userId;
  });
  if (!task) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "Task not found",
    });
  }
  res.status(200).json({
    success: true,
    data: task,
    message: "Task fetched",
  });
});

router.put(
  "/:userId/tasks/:taskId",
  userIdValidation,
  taskBodyValidation,
  function (req, res) {
    let userId = req.params.userId * 1;
    let taskId = Number(req.params.taskId);
    let task = tasks.find(function (task) {
      return task.id === taskId && task.userId === userId;
    });
    if (!task) {
      return res.status(404).json({
        success: false,
        data: null,
        message: "Task not found",
      });
    }
    task.title = req.body.title;
    task.completed = req.body.completed;

    res.status(200).json({
      success: true,
      data: task,
      message: "Task updated",
    });
  },
);

router.delete("/:userId/tasks/:taskId", userIdValidation, function (req, res) {
  let userId = req.params.userId * 1;
  let taskId = Number(req.params.taskId);
  let taskIndex = tasks.findIndex(function (task) {
    return task.id === taskId && task.userId === userId;
  });
  if (taskIndex == -1) {
    return res.status(404).json({
      success: false,
      data: null,
      message: "Task not found",
    });
  }
  tasks.splice(taskIndex, 1);
  res.status(200).json({
    success: true,
    data: null,
    message: "Task deleted",
  });
});

module.exports = router;
