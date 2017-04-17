'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Range = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Range({min:15,max:70}) username;
var Range = exports.Range = function Range() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'Range');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.range', params[0]);
    };
};