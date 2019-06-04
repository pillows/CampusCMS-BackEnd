'use strict';

//
// app.js
//

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./src/routes');


app.use('/api', routes);

module.exports = app;
