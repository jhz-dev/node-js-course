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

const updateMessage = async (id, message) => {
    await connectDB();
    const foundMessage = await Model.findOne({ _id: id });
    foundMessage.message = message;
    const updatedMessage = await foundMessage.save();
    return updatedMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
}