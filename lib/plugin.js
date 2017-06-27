const plugin = module.exports = {
  actions: {},
  filters: {},
  addAction(tag, callback) {
    if (!actions[tag]) {
      actions[tag] = [];
    }
    actions[tag].push(callback);
  },
  addFilter(tag, callback) {
    if (!filters[tag]) {
      filters[tag] = [];
    }
    filters[tag].push(callback);
  },
  doAction(tag, ...args) {
    if (!tag) {
      return;
    }
    if (tag != 'all') {
      doAction('all');
    }
    if (actions[tag]) {
      for (let callback of actions[tag]) {
        callback.apply(args);
      }
    }
  },
  applyFilters(tag, value, ...args) {
    if (!tag) {
      return value;
    }
    if (tag != 'all') {
      value = applyFilters('all');
    }
    let passArgs = [value, ...args]
    let result;
    if (filters[tag]) {
      for (let callback of filters[tag]) {
        result = callback.apply(passArgs);
        if (result) {
          value = result;
        }
      }
    }
    return value;
  }
};
