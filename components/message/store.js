const connectDB = require('../../lib/db');
const Model = require('./model');

const addMessage = async (messageParam) => {
    await connectDB();
    const message = new Model(messageParam);
    message.save();
};

const getMessages = async (user) => {
    let filter = {};
    await connectDB();

    if (user !== null) {
        filter = { user };
    }

    const messages = await Model.find(filter);
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