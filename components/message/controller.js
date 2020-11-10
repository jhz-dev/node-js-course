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

const getMessages = () => {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    });
}

module.exports = { addMessage, getMessages }