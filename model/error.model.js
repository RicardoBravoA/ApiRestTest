'use strict'

var mongoose = require('mongoose')

var schema = mongoose.Schema

var errorSchema = schema({
	message: String
})

module.exports = mongoose.model('Error', errorSchema)