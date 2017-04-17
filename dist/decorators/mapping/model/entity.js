'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Entity = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @Entity({schema: 'Schema', table:'CLIENT', provider:'mysql'}) class Client{...}
var Entity = exports.Entity = function Entity() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'Entity');
        (0, _walasMetaApi.setMeta)(target, 'class.entity', params[0]);
    };
};