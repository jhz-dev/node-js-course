'use strict'

const db = require('mongoose');
const config = require('./config');


// tells mongoose to use the global Promise class, this a godd practice
db.Promise = global.Promise;

async function connectDB () {
  return await db.connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = connectDB
