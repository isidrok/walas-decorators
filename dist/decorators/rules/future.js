'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Future = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Future() date;
var Future = exports.Future = function Future() {
    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'Future');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.future', 'true');
    };
};