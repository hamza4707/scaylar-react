const bcrypt = require("bcrypt");

const comparePassword = async (enteredPassword, hashPassword) => {
  try {
    const compared = await bcrypt.compare(enteredPassword, hashPassword);
    return compared;
  } catch (err) {
    throw err;
  }
};

module.exports = comparePassword;
