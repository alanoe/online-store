const express = require('express');
const bodyParser = require('body-parser');

const app = express()
app.use(bodyParser.jason());
app.use(bodyParser.urlencoded({ extended: false}));

app.listen(3001)