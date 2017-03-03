
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

var router = express.Router();

app.use(require('./Subdivisions/SubdivRest'));

app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});












