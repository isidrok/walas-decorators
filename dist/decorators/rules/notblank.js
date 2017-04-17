'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NotBlank = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @NotBlank() password;
var NotBlank = exports.NotBlank = function NotBlank() {
    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'NotBlank');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.notBlank', true);
    };
};