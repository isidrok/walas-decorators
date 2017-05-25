'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Min = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Min(20) name;
var Min = exports.Min = function Min() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'Min');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.min', params[0]);
    };
};