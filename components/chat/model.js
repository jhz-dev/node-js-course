const mongoose = require('mongoose');

const { Schema } = mongoose;

const schema = new Schema({ 
    users: [{
        type: Schema.ObjectId,
        ref: 'User'
    }] 
});

const model = mongoose.model('Chat', schema);

module.exports = model;