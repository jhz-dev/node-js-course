const Model = require('./model');

const addUser = async (userParam) => {
    const user = new Model(userParam);
    user.save();
};

const getUsers = async (user) => {
    let filter = {};
    if (user !== null) {
        filter = { user };
    }

    const users = await Model.find(filter);
    return users;
}

const updateUser = async (id, user) => {
    console.log(id);
    console.log(user);
    const foundUser = await Model.findOne({ _id: id });
    foundUser.name = user;
    const updatedUser = await foundUser.save();
    return updatedUser;
}

const deleteUser = async (id) => {
    return await Model.findOneAndDelete({ _id: id });;
}

module.exports = {
    add: addUser,
    list: getUsers,
    update: updateUser,
    delete: deleteUser,
}