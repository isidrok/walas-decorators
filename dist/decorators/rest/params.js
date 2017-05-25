'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Params = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Params('name','age') searchClientByNameAndAge(name,age){...}
var Params = exports.Params = function Params() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnMethods)(descriptor, 'Params');
        params.forEach(function (param) {
            var paramName = Object.keys(param)[0];
            (0, _walasMetaApi.setMeta)(target, 'methods.' + key + '.params.' + paramName, param[paramName]);
        });
    };
};