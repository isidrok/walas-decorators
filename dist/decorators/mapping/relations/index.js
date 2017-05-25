'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _manytomany = require('./manytomany.js');

Object.keys(_manytomany).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _manytomany[key];
    }
  });
});

var _hasmany = require('./hasmany.js');

Object.keys(_hasmany).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hasmany[key];
    }
  });
});

var _hasone = require('./hasone.js');

Object.keys(_hasone).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _hasone[key];
    }
  });
});