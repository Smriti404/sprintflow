const asyncHandler = require("../utils/asyncHandler");
const Sprint = require("../models/Sprint");

exports.getSprints = asyncHandler(async (req, res) => {
  const sprints = await Sprint.find({}).populate("project tasks", "title name");
  res.json({ success: true, data: sprints });
});

exports.createSprint = asyncHandler(async (req, res) => {
  const sprint = await Sprint.create(req.body);
  res.status(201).json({ success: true, data: sprint });
});

exports.updateSprint = asyncHandler(async (req, res) => {
  const sprint = await Sprint.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.json({ success: true, data: sprint });
});
