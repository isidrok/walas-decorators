'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Path = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Path('/clients') class Client {...}
var Path = exports.Path = function Path() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'Path');
        (0, _walasMetaApi.setMeta)(target, 'class.path', params[0]);
    };
};