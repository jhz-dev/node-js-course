const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const router = require('./network/routes');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router(app)

app.use('/app', express.static('public'))

app.listen(3000);

console.log('escuchando en http://localhost:3000');