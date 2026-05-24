const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    sprint: { type: mongoose.Schema.Types.ObjectId, ref: "Sprint" },
    assignee: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      default: "Medium",
    },
    status: {
      type: String,
      enum: ["Backlog", "Todo", "In Progress", "Review", "Done"],
      default: "Backlog",
    },
    dueDate: { type: Date },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
    labels: [{ type: String }],
    attachments: [{ type: String }],
    activityLogs: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", taskSchema);
