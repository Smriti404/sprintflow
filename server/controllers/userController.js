const asyncHandler = require("../utils/asyncHandler");
const User = require("../models/User");

exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password");
  res.json({ success: true, data: users });
});

exports.updateProfile = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.user._id, req.body, {
    new: true,
    runValidators: true,
  }).select("-password");
  res.json({ success: true, data: user });
});
