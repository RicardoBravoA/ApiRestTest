'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//load routes

//body-parser

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//config CORS


/* routes */

//test route
app.get('/test', (request, response) => {
	response.status(200).send({
		message: 'Test route successful'
	})
})


//module conversion
module.exports = app;