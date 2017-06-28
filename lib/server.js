const mime = require('mime');
const path = require('path');
const http = require('http');
const plugin = require('openpress-plugin-api');

module.exports = {
  start(port, hostname, createCallback, listenCallback) {
    this.httpServer = http.createServer((request, response) => {
      createCallback(request, response);
    });
    this.httpServer.listen(port, hostname, () => {
      listenCallback(port, hostname);
    });
    return this;
  },
};
