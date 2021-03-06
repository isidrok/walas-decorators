'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Rules = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @rules(required,[max,50],notBlank) email;
var Rules = exports.Rules = function Rules() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'rules');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.rules', params);
    };
};