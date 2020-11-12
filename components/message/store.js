const { Promise } = require('mongoose');
const Model = require('./model');

const addMessage = async (messageParam) => {
    const message = new Model(messageParam);
    message.save();
};

const getMessages = (chat) => {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (chat !== null) {
            filter = { chat };
        }
        
        Model.find(filter)
        .populate('user')
        .exec((error, populatedData) => {
            if (error) {
                reject(error);
            }

            resolve(populatedData);
        });
    });
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