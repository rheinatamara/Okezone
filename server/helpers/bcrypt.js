const bcrypt = require("bcryptjs");

function encode(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

function decode(password, hashPassword) {
  return bcrypt.compareSync(password, hashPassword); // true
}
module.exports = { encode, decode };
