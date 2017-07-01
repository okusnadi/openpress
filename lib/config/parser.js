const path = require('path');

module.exports = {
  parseFile(filePath) {
    return require(filePath);
  }
};
