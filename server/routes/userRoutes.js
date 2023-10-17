const express = require("express");
const userController = require("../controllers/userController");
// const { authMiddleware } = require("../middlewares/authMiddlewares");

const router = express.Router();

router.route("/signup").post(userController.createUser);

router.route("/login").post(userController.loginUser);

module.exports = router;
