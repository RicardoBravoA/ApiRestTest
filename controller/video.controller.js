'use strict'

var videoModel = require('../model/video.model');

function test(request, response) {
	response.status(200).send({
		message: 'Test from controller'
	});
};

function save(request, response){
	var video = new VideoModel();

	var params = request.body();

	if(!params.name){
		response.status(500).send({
			message: 'Name is required'
		});
	}

	if(!params.user){
		response.status(500).send({
			message: 'User is required'
		});
	}


}

module.exports = {
	test
};