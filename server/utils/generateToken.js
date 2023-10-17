const jwt = require("jsonwebtoken");

const generateToken = username => {
  return jwt.sign(username, process.env.JWT_SECRET_KEY);
};

module.exports = generateToken;
