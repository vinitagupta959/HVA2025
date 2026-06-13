const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
    enum: ["pending", "in-progress", "completed"]
  },

  priority: {
    type: Number,
    required: true,
    enum: [1, 2, 3]
  },

  dueDate: {
    type: Date,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Task", taskSchema);