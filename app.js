'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//load routes

var videoRoute = require('./route/video.route');

//body-parser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//config CORS


/* routes */

//test route
app.use('/api', videoRoute);


//module conversion
module.exports = app;