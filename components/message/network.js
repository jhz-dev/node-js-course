const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const messages = await controller.getMessages();
        response.success(req, res, messages);
    } catch (error) {
        response.error(req, res, error, 500);
    }
});

router.post('/', async (req, res) => {
    const { body } = req;
    try {
        const message = await controller.addMessage(body.user, body.message);
        response.success(req, res, message, 201);
    } catch (error) {
        response.error(req, res, error, 400);
    }
});

module.exports = router;