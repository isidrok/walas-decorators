'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ignore = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @Ignore() password;
var Ignore = exports.Ignore = function Ignore() {
    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'Ignore');
        //Properties + methods?
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.ignore', true);
    };
};