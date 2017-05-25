'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Required = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Required() phone;
var Required = exports.Required = function Required() {
    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'Required');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.required', true);
    };
};