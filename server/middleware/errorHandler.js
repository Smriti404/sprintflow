const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Server Error";

  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      errors: Object.values(err.errors).map((e) => e.message),
    });
  }

  if (err.name === "CastError") {
    return res.status(404).json({
      success: false,
      message: "Resource not found",
    });
  }

  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: "Duplicate field value",
    });
  }

  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = errorHandler;
