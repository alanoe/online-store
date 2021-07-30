const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.hashPassword = (password, callback) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hash(password, salt);
};

exports.comparePassword = (plainTextPassword, hashedPassword, callback) => {
   return bcrypt.compare(plainTextPassword, hashedPassword);
};
