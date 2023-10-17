const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username must be entered"],
    unique: [true, "Username should be unique"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "email must be enetered"],
    unique: [true, "Email should be unique"],
    validate: [isEmail, "invalid email"],
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Minimum length should be 6 characters"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
