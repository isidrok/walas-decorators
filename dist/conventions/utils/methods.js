'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getMethods = exports.getMethods = function getMethods(entity) {
    return Object.entries(Object.getOwnPropertyDescriptors(entity.prototype)).filter(function (c) {
        return typeof c[1].value === 'function' && c[0] !== 'constructor';
    }).map(function (c) {
        return { name: c[0], value: c[1].value };
    });
};