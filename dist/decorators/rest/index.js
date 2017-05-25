'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _description = require('./description');

Object.keys(_description).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _description[key];
    }
  });
});

var _path = require('./path');

Object.keys(_path).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _path[key];
    }
  });
});

var _verbs = require('./verbs');

Object.keys(_verbs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _verbs[key];
    }
  });
});

var _summary = require('./summary');

Object.keys(_summary).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _summary[key];
    }
  });
});

var _param = require('./param');

Object.keys(_param).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _param[key];
    }
  });
});

var _response = require('./response');

Object.keys(_response).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _response[key];
    }
  });
});

var _params = require('./params');

Object.keys(_params).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _params[key];
    }
  });
});

var _responses = require('./responses');

Object.keys(_responses).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _responses[key];
    }
  });
});