'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class = require('./class');

Object.keys(_class).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _class[key];
    }
  });
});

var _method = require('./method');

Object.keys(_method).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _method[key];
    }
  });
});

var _property = require('./property');

Object.keys(_property).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _property[key];
    }
  });
});