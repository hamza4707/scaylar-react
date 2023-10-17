const express = require("express");
const meetupController = require("../controllers/meetupController");
const { authMiddleware } = require("../middlewares/authMiddlewares");

const router = express.Router();

router.route("/meetups").get(authMiddleware, meetupController.getAllMeetups);

module.exports = router;
