'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Length = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Length(65) name;
//we assume it is the longest Length
var Length = exports.Length = function Length() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'Length');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.length', params[0]);
    };
};