'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMetaEntities = undefined;

var _walasMetaApi = require('walas-meta-api');

var getMetaEntities = exports.getMetaEntities = function getMetaEntities(dbContext) {
    var instance = new dbContext();
    return Object.entries(Object.getOwnPropertyDescriptors(dbContext.prototype)).filter(function (c) {
        return typeof c[1].value !== 'function';
    }).map(function (c) {
        return { 'entity': instance[c[0]]._entity, 'meta': instance[c[0]]._entity[_walasMetaApi.META] || {} };
    }).map(function (c) {
        return { 'entity': c.entity, 'meta': Object.assign({}, c.meta) };
    });
};