'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DeleteDate = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @DeleteDate('columnName')
/**
 * @export
 * @example @DeleteDate('columnName')
 */
var DeleteDate = exports.DeleteDate = function DeleteDate() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'DeleteDate');
        (0, _walasMetaApi.setMeta)(target, 'class.generators.deleteDate', params[0]);
    };
};