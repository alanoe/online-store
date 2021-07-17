const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/granja', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;