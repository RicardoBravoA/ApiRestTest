'use strict'

var ErrorModel = require('../model/error.model');

const SERVER_ERROR =  'Server error';

function serverError(response) {
	response.status(500).send({
		message: SERVER_ERROR
	});
};

module.exports = {
	serverError
};