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

			//load server
			app.listen(port, () => {
				console.log('Server is running at localhost:3000')
			})
	}).catch(error => console.log(error));