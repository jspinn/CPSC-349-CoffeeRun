(function (window) {
  'use strict';
  var App = window.App || {};
  
  class DataStore {
    constructor() {
      console.log('running the DataStore constructor');
      this.data = {};
      return undefined;
    }
    add(key, val) { this.data[key] = val; }
    get(key) { return this.data[key]; }
    getAll() { return this.data; }
    remove(key) { delete this.data[key]; }

    static runTests() {
      ds.add('m@bond.com', 'tea');
      ds.add('james@bond.com', 'eshpressho');
      console.log(ds.getAll());
      ds.remove('james@bond.com');
      console.log(ds.getAll());
      console.log(ds.get('m@bond.com'));
      console.log(ds.get('james@bond.com'));
      console.log('Trying to get removed jamsed@bond.com gets: ' + ds.get('james@bond.com'));
    }
  }

  App.DataStore = DataStore;
  window.App = App;

})(window);