'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Id = undefined;

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

//usage: @id() dni;
//or: @id(id1,id2) class Client {...}
var Id = exports.Id = function Id() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _utils.notOnMethods)(descriptor, 'id');
        var values = params.length > 0 ? params : [key];
        values.forEach(function (value) {
            (0, _walasMetaApi.setMeta)(target, 'class.ids', value, true);
        });
    };
};