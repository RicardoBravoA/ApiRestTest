'use strict'

var ErrorModel = require('../model/error.model')
const Constant = require('../util/constant')

function serverError(response) {
	response.status(Constant.CODE_500).send({
		message: Constant.SERVER_ERROR
	})
}

function showError(response, message) {
	response.status(Constant.CODE_200).send({
		message: message
	})
}

function showParameterError(response, message) {
	response.status(Constant.CODE_500).send({
		message: message
	})
}

module.exports = {
	serverError,
	showError,
	showParameterError
}