const asyncHandler = require("../utils/asyncHandler");
const Project = require("../models/Project");

exports.getProjects = asyncHandler(async (req, res) => {
  const projects = await Project.find({}).populate("manager members", "name email avatar role");
  res.json({ success: true, data: projects });
});

exports.createProject = asyncHandler(async (req, res) => {
  const payload = { ...req.body, createdBy: req.user._id };
  const project = await Project.create(payload);
  res.status(201).json({ success: true, data: project });
});

exports.updateProject = asyncHandler(async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.json({ success: true, data: project });
});

exports.deleteProject = asyncHandler(async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ success: true, message: "Project removed" });
});
