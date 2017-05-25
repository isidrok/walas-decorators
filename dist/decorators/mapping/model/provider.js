'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Provider = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @Provider('example') class Client{...}
var Provider = exports.Provider = function Provider() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'Provider');
        //classes + properties?
        (0, _walasMetaApi.setMeta)(target, 'class.provider', params[0]);
    };
};