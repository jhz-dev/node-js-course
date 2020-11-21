const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()
const config = require('./config');

const app = express();
const router = require('./network/routes');
const connectDB = require('./db');

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app)

app.use(`/${config.publicRoute}`, express.static('public'))

app.listen(config.port);

console.log(`escuchando en ${config.host}:${config.port}`);