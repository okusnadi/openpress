const mime = require('mime');
const path = require('path');
const http = require('http');
const plugin = require('openpress-plugin-api');

const server = http.createServer((request, response) => {

  // Setting default headers for all requests
  response.setHeader('X-Powered-By', 'OpenPress');

});

server.on('request', (request, response) => {
  response.end('<html><head></head><body><h1>Hello World</h1></body></html>');
});

server.listen(8000, 'localhost', 0, () => {

});
