'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _conventons = require('./conventons');

Object.keys(_conventons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _conventons[key];
    }
  });
});

var _decorators = require('./decorators');

Object.keys(_decorators).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _decorators[key];
    }
  });
});