'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Private = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @private() class Foo {...};
var Private = exports.Private = function Private() {
    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'Private');
        (0, _walasMetaApi.setMeta)(target, 'class.private', true);
    };
};