'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NotEmpty = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @NotEmpty() id;
var NotEmpty = exports.NotEmpty = function NotEmpty() {
    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'NotEmpty');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.notEmpty', true);
    };
};