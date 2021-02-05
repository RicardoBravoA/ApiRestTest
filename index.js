//for new js versions
'use strict'

//mongoose module
var mongoose = require('mongoose');
var app = require('./app');
var port = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mongo', {
	useNewUrlParser: true,
	useUnifiedTopology: true
	}).then(() => {
			console.log('Connection successful');
	}).catch(error => console.log(error));