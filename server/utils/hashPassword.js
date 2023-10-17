const bcrypt = require("bcrypt");

const hashPassword = async password => {
  const salt = await bcrypt.genSalt(Number(process.env.SALT_WORK_FACTOR));
  // console.log("salt :", salt);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

module.exports = hashPassword;
