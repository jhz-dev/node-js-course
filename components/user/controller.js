const store = require('./store');

const addUser = (user) => {
    return new Promise((resolve, reject) => {
        if (!user) {
            reject('Invalid data');
        }
        
        const fullUser = {
            name: user
        }

        store.add(fullUser);

        resolve(fullUser);
    });
}

const getUsers = (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            resolve(await store.list(user));   
        } catch (error) {
            reject(error);
        }
    });
}

const updateUser = (id, user) => {
    return new Promise(async (resolve, reject) => {
        if (!id && !user) {
            reject('Invalid data');
        }

        const result = await store.update(id, user);
        resolve(result);
    });
}

const deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid data');
        }

        const result = await store.delete(id);
        resolve(result);
    });
}

module.exports = { addUser, getUsers, updateUser, deleteUser }