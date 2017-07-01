const server = require('./lib/server');
const config = require('./lib/config');
const pkg = require('./package.json');

module.exports = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  author: pkg.author,
  start() {
    config.load((config) => {
      server.start(config.port, config.hostname, (httpServer) => {
        httpServer.on('request', (request, response) => {

        });
      });
    });
  }
};
