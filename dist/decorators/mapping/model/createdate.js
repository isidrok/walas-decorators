'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CreateDate = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @CreateDate('columnName')
/**
 * @export
 * @example @CreateDate('columnName')
 */
var CreateDate = exports.CreateDate = function CreateDate() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'CreateDate');
        (0, _walasMetaApi.setMeta)(target, 'class.generators.createDate', params[0]);
    };
};