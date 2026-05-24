const mongoose = require("mongoose");

const sprintSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
    progress: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sprint", sprintSchema);
