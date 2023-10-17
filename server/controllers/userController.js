const User = require("../models/userModel");
// const comparePassword = require("../utils/comparePassword");
const bcrypt = require("bcrypt");
const hashPassword = require("../utils/hashPassword");
const generateToken = require("../utils/generateToken");

exports.createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await hashPassword(password);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    // console.log("new user", newUser);
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) return res.status(200).json("User does not exist");

    // const comparedPassword = await comparePassword(password, user.password);
    const comparedPassword = await bcrypt.compare(password, user.password);

    if (!comparedPassword) res.status(200).json({ message: "wrong password" });

    const jwtToken = generateToken(user.username);

    res.json({ message: "success", body: { login: true, token: jwtToken } });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: err.message,
    });
  }
};
