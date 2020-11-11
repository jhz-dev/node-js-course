const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', async(req, res) => {
    const user = req.query.user || null;
    try {
        const users = await controller.getUsers(user);
        response.success(req, res, users);
    } catch (error) {
        response.error(req, res, error, 500);
    }
});

router.post('/', async (req, res) => {
    const { body } = req;
    try {
        const user = await controller.addUser(body.user);
        response.success(req, res, user, 201);
    } catch (error) {
        response.error(req, res, error, 400);
    }
});

router.patch('/:id', async (req, res) => {
    const { body, params } = req;
    try {
        const user = await controller.updateUser(params.id, body.name);
        response.success(req, res, user, 200);
    } catch (error) {
        response.error(req, res, error, 500);
    }
});

router.delete('/:id', async (req, res) => {
    const { params } = req;
    try {
        const user = await controller.deleteUser(params.id);
        response.success(req, res, user, 200);
    } catch (error) {
        response.error(req, res, error, 500);
    }
});

module.exports = router;