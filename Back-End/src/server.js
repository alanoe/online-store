'use strict'

// external
const http = require('http');
const debug = require('debug')('granja-desesperados:server');

// internal
const app = require('./app');

// init web server
const port = 3000;
app.set('port', port);
const server = http.createServer(app);

// run web server
server.listen(port);
