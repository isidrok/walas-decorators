'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Property = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

////usage: @Property({name:'dbName', type:'string', dbtype:'varchar', length:50}) surname;
var Property = exports.Property = function Property() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'Property');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.property', params[0]);
    };
};