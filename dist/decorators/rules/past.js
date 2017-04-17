'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Past = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Past() date;
var Past = exports.Past = function Past() {
    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'Past');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.past', true);
    };
};