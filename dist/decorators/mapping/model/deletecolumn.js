'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DeleteColumn = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @DeleteColumn('columnName')
/**
 * @export
 * @example @DeleteColumn('columnName')
 */
var DeleteColumn = exports.DeleteColumn = function DeleteColumn() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'DeleteColumn');
        (0, _walasMetaApi.setMeta)(target, 'class.generators.deleteColumn', params[0]);
    };
};