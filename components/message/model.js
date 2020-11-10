const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({
    user: String,
    message: {
        type: String,
        required: true
    },
    date: Date,
});

const model = mongoose.model('Message', schema);

module.exports = model;