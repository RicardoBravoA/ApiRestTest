'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//load routes

//body-parser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());