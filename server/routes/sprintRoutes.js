const express = require("express");
const { getSprints, createSprint, updateSprint } = require("../controllers/sprintController");
const { protect } = require("../middleware/auth");

const router = express.Router();

router.use(protect);
router.get("/", getSprints);
router.post("/", createSprint);
router.put("/:id", updateSprint);

module.exports = router;
