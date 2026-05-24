const asyncHandler = require("../utils/asyncHandler");
const Task = require("../models/Task");

exports.getTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.find({}).populate("assignee project sprint", "title name email avatar");
  res.json({ success: true, data: tasks });
});

exports.createTask = asyncHandler(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ success: true, data: task });
});

exports.updateTask = asyncHandler(async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.json({ success: true, data: task });
});

exports.deleteTask = asyncHandler(async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "Task removed" });
});
