'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _model = require('./model');

Object.keys(_model).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _model[key];
    }
  });
});

var _relations = require('./relations');

Object.keys(_relations).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _relations[key];
    }
  });
});