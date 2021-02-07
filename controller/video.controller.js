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
		errorContract.showError(response, Constant.NAME_IS_REQUIRED)
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
				errorContract.showError(response, Constant.ERROR_SAVING_VIDEO)
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
				errorContract.showError(response, Constant.VIDEO_NOT_FOUND)
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
				errorContract.showError(response, Constant.VIDEO_NOT_FOUND)
			}
		}
	})
}

function remove(request, response) {
	var id = request.params.id

	VideoModel.findByIdAndRemove(id, (error, video) => {
		if(error) {
			errorContract.serverError(response)
		} else {
			if(video) {
				response.status(200).send({
					video: video
				})
			} else {
				errorContract.showError(response, Constant.VIDEO_NOT_FOUND)
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