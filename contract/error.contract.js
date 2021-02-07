'use strict'

var ErrorModel = require('../model/error.model');

function serverError(response) {
	response.status(500).send({
		message: SERVER_ERROR
	});
};



module.exports = {
	serverError
};