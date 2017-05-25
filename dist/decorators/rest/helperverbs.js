'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.setVerbsMeta = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //usage: @Get('/:id?') searchClientById(id){...}


var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

var setVerbsMeta = exports.setVerbsMeta = function setVerbsMeta(target, key, descriptor, verb, params) {
    (0, _utils.onlyOnMethods)(descriptor, verb);
    var value = _typeof(params[0]) === 'object' ? params[0] : { url: params[0] };
    value.verb = verb;
    (0, _walasMetaApi.setMeta)(target, 'methods.' + key + '.' + verb, value);
};