'use strict';

//
// app.js
//

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.get('/', function (req, res) {


    return res.send("sdsd")
});

module.exports = app;
