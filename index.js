//for new js versions
'use strict'

//mongoose module
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/curso_mongo', {useMongoClient: true})
		.then(() => {
			console.log('Connection successfull');
		})
		.catch(error => console.log(error));