'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HasOne = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../../utils');

// usage: class Bill { @hasOne(Client) client; ...}
var HasOne = exports.HasOne = function HasOne() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'hasOne');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.hasOne', params[0]);
    };
};