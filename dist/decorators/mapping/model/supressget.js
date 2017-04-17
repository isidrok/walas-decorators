'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SupressGet = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @SupressGet()
/**
 * @export
 * @example @SupressGet()
 */
var SupressGet = exports.SupressGet = function SupressGet() {
    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'SupressGet');
        (0, _walasMetaApi.setMeta)(target, 'class.generators.supressGet', true);
    };
};