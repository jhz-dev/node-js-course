const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config()
const app = express();
const router = require('./network/routes');
const connectDB = require('./db');

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app)

app.use('/app', express.static('public'))

app.listen(3000);

console.log('escuchando en http://localhost:3000');