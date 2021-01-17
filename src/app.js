const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const api = require('./routes');

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 
// Routes
app.use('/api', api);

module.exports = app;
