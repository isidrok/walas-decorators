'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Summary = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Summary('search client') searchClientByDni(dni){...}
var Summary = exports.Summary = function Summary() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnMethods)(descriptor, 'Summary');
        (0, _walasMetaApi.setMeta)(target, 'methods.' + key + '.summary', params[0]);
    };
};