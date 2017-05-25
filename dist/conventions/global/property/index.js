'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _conventiondecimal = require('./conventiondecimal');

Object.keys(_conventiondecimal).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _conventiondecimal[key];
    }
  });
});

var _conventioncolumndescription = require('./conventioncolumndescription');

Object.keys(_conventioncolumndescription).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _conventioncolumndescription[key];
    }
  });
});

var _conventionproperties = require('./conventionproperties');

Object.keys(_conventionproperties).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _conventionproperties[key];
    }
  });
});

var _conventionstring = require('./conventionstring');

Object.keys(_conventionstring).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _conventionstring[key];
    }
  });
});