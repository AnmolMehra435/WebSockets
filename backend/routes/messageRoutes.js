const express = require('express');
const route = express.Router();
const messageController = require('../controllers/messageController')

route.get('/getmessage', messageController.getMessage);
route.post('/sendmessage', messageController.addMessage);

module.exports = route;