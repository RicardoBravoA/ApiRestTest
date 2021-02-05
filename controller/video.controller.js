'use strict'

var video = require('../model/video');

function test(request, response) {
	response.status(200).send({
		message: 'Test from controller'
	});
};

module.exports = {
	test
};