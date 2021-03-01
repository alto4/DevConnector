const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  // Get token from the header
  const token = req.header("x-auth-token");

  // If no token exists, 401 error - access denied
  if (!token) {
    return res
      .status(401)
      .json({ msg: "No JSON web token found. Access denied." });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, "secrettoken");

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({
      msg: "Token is invalid. Please try logging in again.",
    });
  }
};
