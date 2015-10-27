/**
 * Created by Dana on 10/26/15.
 */
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

app.use(express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use('/', index);

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});


module.exports = app;