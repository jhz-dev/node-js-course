const message = require('../components/message/network');
const user = require('../components/user/network');
const chats = require('../components/chat/network');

const routes = server => {
    server.use('/messages', message);
    server.use('/users', user);
    server.use('/chats', chats);
}

module.exports = routes;