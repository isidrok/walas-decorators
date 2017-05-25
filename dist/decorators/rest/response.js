'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Response = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Response('200', 'OK') searchClientById(id){...}
var Response = exports.Response = function Response() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnMethods)(descriptor, 'Response');
        (0, _walasMetaApi.setMeta)(target, 'methods.' + key + '.responses.' + params[0], params[1]);
    };
};