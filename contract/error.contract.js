'use strict'

var ErrorModel = require('../model/error.model');
const Constant = require('../util/constant')

function serverError(response) {
	response.status(500).send({
		message: Constant.SERVER_ERROR
	});
};

function showError(response, message) {
	response.status(200).send({
		message: message
	});
};


module.exports = {
	serverError,
	showError
};