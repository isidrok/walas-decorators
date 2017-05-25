'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Param = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Param('id') searchClientById(id){...}
var Param = exports.Param = function Param() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnMethods)(descriptor, 'Param');
        var paramName = Object.keys(params[0])[0];
        (0, _walasMetaApi.setMeta)(target, 'methods.' + key + '.params.' + paramName, params[0][paramName]);
    };
};