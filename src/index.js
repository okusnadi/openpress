const express = require('express');
const app = express()

class sample {}

let newSample = new sample();

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(80, function() {
  console.log('Example app listening on port 80!');
});
