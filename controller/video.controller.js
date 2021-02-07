'use strict'

var VideoModel = require('../model/video.model')
var errorContract = require('../contract/error.contract')
const Constant = require('../util/constant')

function test(request, response) {
	response.status(200).send({
		message: 'Test from controller'
	})
}

function save(request, response){
	var video = new VideoModel()

	var params = request.body

	if(!params.name){
		response.status(500).send({
			message: 'Name is required'
		})
	}

	if(!params.user){
		response.status(500).send({
			message: 'User is required'
		})
	}

	video.user = params.use
	video.name = params.name
	video.description = params.description
	video.date = params.date

	video.save((error, data) => {
		if(error) {
			errorContract.serverError(response)
		} else {
			if(data) {
				response.status(200).send({
					video: data
				})
			} else {
				response.status(500).send({
					message: 'Error saving video'		
				})
			}
		}
	})

}

function list(request, response) {
	// var video is exposed in json response
	// sort -1 order desc
	VideoModel.find({}).sort({'_id': -1}).exec((error, video) => {
		if(error) {
			errorContract.serverError(response)
		} else {
			if(video) {
				response.status(200).send({
					video
				})
			} else {
				response.status(404).send({
					message: 'Videos not found'
				})
			}
		}
	})
}

function getVideo(request, response) {
	var id = request.params.id

	VideoModel.findById(id).exec((error, video) => {
		if(error) {
			errorContract.serverError(response)
		} else {
			if(video) {
				response.status(200).send({
					video
				})
			} else {
				errorContract.showError(response, Constant.VIDEO_NOT_FOUND)
			}
		}
	})
}

function update(request, response) {
	var id = request.params.id
	var params = request.body

	VideoModel.findByIdAndUpdate(id, params, {new: true}, (error, video) => {
		if(error) {
			errorContract.serverError(response)
		} else {
			if(video) {
				response.status(200).send({
					video: video
				})
			} else {
				response.status(404).send({
					message: 'Video not found'
				})
			}
		}
	})
}

function remove(request, response) {
	var id = request.params.id

	VideoModel.findByIdAndRemove(id, (error, video) => {
		if(error) {
			response.status(500).send({
				message: 'Server error'
			})
		} else {
			if(video) {
				response.status(200).send({
					video: video
				})
			} else {
				response.status(404).send({
					message: 'Video not found'
				})
			}
		}
	})
}

module.exports = {
	test,
	save,
	list,
	getVideo,
	update,
	remove
}