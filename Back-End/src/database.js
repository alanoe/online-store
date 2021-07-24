const mongoose = require('mongoose');

// Set up MongoDB client
MONGODB_URL = 'mongodb://localhost/granja';
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;

// Bind connection to error event (to get notification of connection errors)
//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = mongoose;
