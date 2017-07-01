const glob = require('glob');
const path = require('path');
const parser = require('./config/parser');
const defaultConfig = require('./config/default-config');

module.exports = {
  config: {},
  load(callback) {
    glob(path.join(process.cwd(), '*.openpressrc*(.json|.js)'), (err, files) => {
      if (err) {
        return;
      }
      if (files.length > 0) {
        this.config = parser.parseFile(files[0]);
        this.config = _.defaultsDeep(this.config, defaultConfig);
        callback(this.config);
      }
    });
    return this;
  }
};
