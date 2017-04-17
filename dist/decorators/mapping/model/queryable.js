'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Queryable = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @Queryable(Bar) class Foo {...};
var Queryable = exports.Queryable = function Queryable() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnClasses)(descriptor, 'Queryable');
        (0, _walasMetaApi.setMeta)(target, 'class.queryable', [target.name].concat(params));
    };
};