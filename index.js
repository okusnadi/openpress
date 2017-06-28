const server = require('./lib/server');
const pkg = require('./package.json');

module.exports = {
  name: pkg.name,
  version: pkg.version,
  description: pkg.description,
  author: pkg.author,
  start() {
    server.start();
  }
};
