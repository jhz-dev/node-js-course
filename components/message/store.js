const connectDB = require('../../lib/db');
const Model = require('./model');

const addMessage = (messageParam) => {
    connectDB().then(() => {
        const message = new Model(messageParam);
        message.save();
    })
};

const getMessages = () => {
    return list;
}
module.exports = {
    add: addMessage,
    list: getMessages,
}