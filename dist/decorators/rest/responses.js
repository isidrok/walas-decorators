'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Responses = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Responses( {'200':'Ok','400':'Error'}) searchClientById(id){...}
var Responses = exports.Responses = function Responses() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnMethods)(descriptor, 'Responses');
        Object.keys(params[0]).forEach(function (code) {
            (0, _walasMetaApi.setMeta)(target, 'methods.' + key + '.responses.' + code, params[0][code]);
        });
    };
};