'use strict'

function test(request, response) {
	response.status(200).send({
		message: 'Test from controller'
	});
};

module.exports = {
	test
};