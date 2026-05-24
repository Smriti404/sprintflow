const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
const connectDB = require("../config/db");
const User = require("../models/User");
const Project = require("../models/Project");
const Task = require("../models/Task");
const Sprint = require("../models/Sprint");

const seed = async () => {
  await connectDB();

  await Promise.all([
    User.deleteMany(),
    Project.deleteMany(),
    Task.deleteMany(),
    Sprint.deleteMany(),
  ]);

  const [admin, manager, dev] = await User.create([
    { name: "Admin User", email: "admin@sprintflow.dev", password: "Password123!", role: "Admin" },
    { name: "Priya Manager", email: "pm@sprintflow.dev", password: "Password123!", role: "Project Manager" },
    { name: "Dev User", email: "dev@sprintflow.dev", password: "Password123!", role: "Developer" },
  ]);

  const project = await Project.create({
    title: "SprintFlow Web App",
    description: "Modern SaaS agile dashboard",
    members: [admin._id, manager._id, dev._id],
    manager: manager._id,
    createdBy: admin._id,
  });

  const sprint = await Sprint.create({
    name: "Sprint 1",
    startDate: new Date(),
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    project: project._id,
    progress: 45,
  });

  await Task.create([
    {
      title: "Design dashboard layout",
      project: project._id,
      sprint: sprint._id,
      assignee: dev._id,
      priority: "High",
      status: "In Progress",
      labels: ["UI", "Dashboard"],
    },
    {
      title: "Implement auth flow",
      project: project._id,
      sprint: sprint._id,
      assignee: manager._id,
      priority: "Critical",
      status: "Todo",
      labels: ["Auth"],
    },
  ]);

  console.log("Seed data created");
  await mongoose.connection.close();
};

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
