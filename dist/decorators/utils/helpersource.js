'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var getSource = exports.getSource = function getSource(descriptor) {
    if (!descriptor) return 'class';
    if (descriptor.value && typeof descriptor.value === 'function') return 'method';
    return 'property';
};