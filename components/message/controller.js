const store = require('./store');

const addMessage = (user, message) => {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            reject('los atos son incorrectos');
            return false;
        }
        
        const fullMessage = {
            user,
            message,
            date: new Date()
        }

        store.add(fullMessage);

        resolve(fullMessage);
    });
}

const getMessages = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await store.list(user));   
        } catch (error) {
            reject(error);
            return false;
        }
    });
}

const updateMessage = (id, message) => {
    return new Promise(async (resolve, reject) => {
        if (!id && !message) {
            reject('Invalid data');
            return false;
        }

        const result = await store.update(id, message);
        resolve(result);
    });
}

module.exports = { addMessage, getMessages, updateMessage }