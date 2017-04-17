'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Pattern = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Pattern('id%',null) id;
//usage: @Pattern('$%&','') name;
var Pattern = exports.Pattern = function Pattern() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.onlyOnProperties)(descriptor, 'Pattern');
        (0, _walasMetaApi.setMeta)(target, 'properties.' + key + '.pattern', params);
    };
};