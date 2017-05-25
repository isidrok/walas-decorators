'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UpdateDate = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @UpdateDate('columnName')
/**
 * @export
 * @example: @UpdateDate('columnName')
 */
var UpdateDate = exports.UpdateDate = function UpdateDate() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'UpdateDate');
        (0, _walasMetaApi.setMeta)(target, 'class.generators.updateDate', params[0]);
    };
};