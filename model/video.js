'use strict'

var mongoose = require('mongoose');

var schema = mongoose.Schema;

var videoSchema = Schema({
	user: String,
	name: String,
	description: String,
	date: Date
});
