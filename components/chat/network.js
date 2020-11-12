const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.post('/', async (req, res) => {
    const { body } = req;
    try {
        const users = await controller.addChat(body.users);
        response.success(req, res, users, 201);
    } catch (error) {
        response.error(req, res, error, 500);
    }
});


router.get('/:userId', async(req, res) => {
    const userId = req.query.userId || null;
    try {
        const chats = await controller.listChats(userId);
        response.success(req, res, chats);
    } catch (error) {
        response.error(req, res, error, 500);
    }
});

module.exports = router;