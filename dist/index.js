'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(80, "localhost", function () {
  console.log('Example app listening on port 80!');
});
