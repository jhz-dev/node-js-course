const store = require('./store');

const addChat = (users) => {
    return new Promise((resolve, reject) => {
        if (!users || !Array.isArray(users)) {
            reject('Invalid data');
        }
        
        const chat = { users };

        store.add(chat);

        resolve(chat);
    });
}

const listChats = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await store.list(userId));   
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = { addChat, listChats }