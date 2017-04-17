'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getProperties = exports.getProperties = function getProperties(entity) {
    return Object.entries(Object.getOwnPropertyDescriptors(entity.prototype)).filter(function (c) {
        return typeof c[1].value !== 'function';
    }).map(function (c) {
        return c[0];
    });
};