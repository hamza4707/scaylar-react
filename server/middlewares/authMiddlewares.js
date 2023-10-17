const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers?.authentication.split(" ")[1];

  // console.log("Token:", token);

  if (!token) res.json({ login: false });
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      res.json({ login: false });
    } else {
      next();
    }
  });
};

module.exports = { authMiddleware };
