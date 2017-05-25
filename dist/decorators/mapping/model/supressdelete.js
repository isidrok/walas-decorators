'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SupressDelete = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @SupressDelete()
/**
 * @export
 * @example @SupressDelete()
 */
var SupressDelete = exports.SupressDelete = function SupressDelete() {
    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'SupressDelete');
        (0, _walasMetaApi.setMeta)(target, 'class.generators.supressDelete', true);
    };
};