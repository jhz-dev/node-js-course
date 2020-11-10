'use strict'

const db = require('mongoose');
const { DB_USER, DB_PASSWD, DB_HOST, DB_NAME } = process.env
const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}`

// tells mongoose to use the global Promise class, this a godd practice
db.Promise = global.Promise;

async function connectDB () {
  return db.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
}

module.exports = connectDB
