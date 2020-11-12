const store = require('./store');

const addMessage = (user, message, chat) => {
    return new Promise((resolve, reject) => {
        if (!user || !message || !chat) {
            reject('los datos son incorrectos');
        }
        
        const fullMessage = {
            chat,
            user,
            message,
            date: new Date()
        }

        store.add(fullMessage);

        resolve(fullMessage);
    });
}

const getMessages = (chat) => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await store.list(chat));   
        } catch (error) {
            reject(error);
        }
    });
}

const updateMessage = (id, message) => {
    return new Promise(async (resolve, reject) => {
        if (!id && !message) {
            reject('Invalid data');
        }

        const result = await store.update(id, message);
        resolve(result);
    });
}

const deleteMessage = (id) => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid data');
        }

        const result = await store.delete(id);
        resolve(result);
    });
}

module.exports = { addMessage, getMessages, updateMessage, deleteMessage }