'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Put = exports.Post = exports.Patch = exports.Get = exports.Delete = undefined;

var _helperverbs = require('./helperverbs');

var Delete = exports.Delete = function Delete() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        (0, _helperverbs.setVerbsMeta)(target, key, descriptor, 'delete', params);
    };
};

var Get = exports.Get = function Get() {
    for (var _len2 = arguments.length, params = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        params[_key2] = arguments[_key2];
    }

    return function (target, key, descriptor) {
        (0, _helperverbs.setVerbsMeta)(target, key, descriptor, 'get', params);
    };
};

var Patch = exports.Patch = function Patch() {
    for (var _len3 = arguments.length, params = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        params[_key3] = arguments[_key3];
    }

    return function (target, key, descriptor) {
        (0, _helperverbs.setVerbsMeta)(target, key, descriptor, 'patch', params);
    };
};

var Post = exports.Post = function Post() {
    for (var _len4 = arguments.length, params = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        params[_key4] = arguments[_key4];
    }

    return function (target, key, descriptor) {
        (0, _helperverbs.setVerbsMeta)(target, key, descriptor, 'post', params);
    };
};

var Put = exports.Put = function Put() {
    for (var _len5 = arguments.length, params = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        params[_key5] = arguments[_key5];
    }

    return function (target, key, descriptor) {
        (0, _helperverbs.setVerbsMeta)(target, key, descriptor, 'put', params);
    };
};