const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', async(req, res) => {
    const user = req.query.user || null;
    try {
        const messages = await controller.getMessages(user);
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

router.patch('/:id', async (req, res) => {
    const { body, params } = req;
    try {
        const message = await controller.updateMessage(params.id, body.message);
        response.success(req, res, message, 200);
    } catch (error) {
        response.error(req, res, error, 500);
    }
});

module.exports = router;