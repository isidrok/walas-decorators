'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Index = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @index(index1, {field: _field, order: _order}) class Client{...}
var Index = exports.Index = function Index() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'index');
        (0, _walasMetaApi.setMeta)(target, 'class.indexes.' + params[0], params[1]);
    };
};