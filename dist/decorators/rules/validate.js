'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Validate = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Validate() id;
var Validate = exports.Validate = function Validate() {
    return function (target, key, descriptor) {
        (0, _utils.onlyOnMethods)(descriptor, 'Validate');
        (0, _walasMetaApi.setMeta)(target, 'methods.' + key + '.validate', true);
    };
};