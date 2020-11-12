const Model = require('./model');

const addChat = async (chatParam) => {
    const chat = new Model(chatParam);
    return chat.save();
};

const getChats = async (userId) => {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (userId !== null) {
            filter = { users: userId };
        }
    
        Model.find(filter)
        .populate('users')
        .exec((error, populated) => {
            if (error) {
                reject(error);
                return false;
            }

            resolve(populated);
        });
    });
}

module.exports = {
    add: addChat,
    list: getChats,
}