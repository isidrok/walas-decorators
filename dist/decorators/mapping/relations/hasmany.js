'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HasMany = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../../utils');

// usage: class Client { @hasMany(Bill) bills; ...}
var HasMany = exports.HasMany = function HasMany() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'hasMany');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.hasMany', params[0]);
    };
};