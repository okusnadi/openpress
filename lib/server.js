const mime = require('mime');
const path = require('path');
const http = require('http');
const plugin = require('openpress-plugin-api');

module.exports = {
  start(port, hostname, callback) {
    this.httpServer = http.createServer();
    callback(this.httpServer);
    return this;
  },
};
