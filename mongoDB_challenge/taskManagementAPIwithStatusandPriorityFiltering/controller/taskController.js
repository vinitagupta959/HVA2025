const Task = require("../model/Task");
async function createTask(req, res) {
  try {
    const task = await Task.create(req.body);

    return res.status(201).json({
      ok: true,
      data: task,
      message: "Task created",
    });
  } catch (err) {
    return res.status(400).json({
      ok: false,
      message: "Invalid data",
      error: err.message,
    });
  }
}

async function getTasks(req, res) {
  try {
    const { status, priority, dueBefore, limit, skip, sortBy, order } =
      req.query;
    let filter = {};
    if (status) {
      filter.status = status;
    }
    if (priority) {
      filter.priority = priority;
    }
    if (dueBefore) {
      filter.dueDate = {
        $lt: new Date(dueBefore),
      };
    }
    const sortOrder = order === "desc" ? -1 : 1;

    const task = await Task.find(filter)
      .limit(Number(limit) || 10)
      .skip(Number(skip) || 0)
      .sort({ [sortBy || "createdAt"]: sortOrder })
    res.status(200).json({
      ok: true,
      data: task,
    });
  } catch (err) {
    res.status(400).json({
      ok: false,
      message: err.message,
    });
  }
}

async function getTaskbyId(req, res) {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      res.status(200).json({
        ok: true,
        data: task,
        message: "Task Fetched",
      });
    } else {
      res.status(404).json({
        ok: false,
        message: "Task not found",
      });
    }
  } catch (err) {
    res.status(400).json({
      ok: false,
      message: err.message,
    });
  }
}

async function updateTaskById(req, res) {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body,
      {
        new: true,
        runValidators: true
      })
    if (task) {
      return res.status(200).json({
        ok: true,
        data: task,
        message: "Task updated"
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: "Task Not Found"
      })
    }
  } catch (err) {
    res.status(400).json({
      ok: false,
      message: err.message
    })
  }

}

async function deleteTaskById(req, res) {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (task) {
      return res.status(200).json({
        ok: true,
        message: "Task Deleted"
      })
    } else {
      return res.status(404).json({
        ok: false,
        message: "Task Not Found"
      })
    }

  } catch (err) {
    res.status(400).json({
      ok: false,
      message: err.message
    })
  }
}

module.exports = { createTask, getTasks, getTaskbyId, updateTaskById, deleteTaskById };
