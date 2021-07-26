const bcrypt = require('bcrypt');

const saltRounds = 10;

exports.cryptPassword = function(password, callback) {
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hash(password, salt);
};

exports.comparePassword = function(plainTextPassword, hashedPassword, callback) {
   return bcrypt.compare(plainTextPassword, hashedPassword)
};
