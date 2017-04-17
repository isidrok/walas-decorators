'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Max = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Max(50) password;
var Max = exports.Max = function Max() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'Max');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.max', params[0]);
    };
};