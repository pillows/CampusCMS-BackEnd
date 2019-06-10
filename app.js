'use strict';

//
// app.js
//

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./src/routes');

// Taken from StackOverflow https://stackoverflow.com/a/12008719

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.use('/api', routes);

module.exports = app;
