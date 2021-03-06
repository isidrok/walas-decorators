'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _global = require('./global');

Object.keys(_global).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _global[key];
    }
  });
});