'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Schema = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @Schema('schema')
/**
 * @export
 * @example @Schema('schema')
 */
var Schema = exports.Schema = function Schema() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'Schema');
        (0, _walasMetaApi.setMeta)(target, 'class.entity', params[0]);
    };
};