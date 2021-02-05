'use strict'

var express = require('express');
var videoController = require('../controller/video.controller');

var api = express.Router();

api.get('/test', videoController.test);
api.post('/video', videoController.save);
api.get('/video', videoController.list);

module.exports = api;
