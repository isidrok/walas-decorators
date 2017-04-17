'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Hidden = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @Hidden()
/**
 * @export
 * @example @Hidden()
 */
var Hidden = exports.Hidden = function Hidden() {
    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'Hidden');
        (0, _walasMetaApi.setMeta)(target, 'class.hidden', true);
    };
};