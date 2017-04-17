'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NotNull = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @NotNull() id;
var NotNull = exports.NotNull = function NotNull() {
    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'NotNull');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.notNull', true);
    };
};