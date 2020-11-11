const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
    name: String
});

const model = mongoose.model('User', schema);

module.exports = model;