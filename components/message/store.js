const connectDB = require('../../lib/db');
const Model = require('./model');

const addMessage = async (messageParam) => {
    await connectDB();
    const message = new Model(messageParam);
    message.save();
};

const getMessages = async () => {
    await connectDB();
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessages,
}