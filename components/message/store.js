const Model = require('./model');

const addMessage = async (messageParam) => {
    const message = new Model(messageParam);
    message.save();
};

const getMessages = async (user) => {
    let filter = {};
    if (user !== null) {
        filter = { user };
    }

    const messages = await Model.find(filter);
    return messages;
}

const updateMessage = async (id, message) => {
    const foundMessage = await Model.findOne({ _id: id });
    foundMessage.message = message;
    const updatedMessage = await foundMessage.save();
    return updatedMessage;
}

const deleteMessage = async (id) => {
    return await Model.findOneAndDelete({ _id: id });;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateMessage,
    delete: deleteMessage,
}