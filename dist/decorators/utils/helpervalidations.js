'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.notOnProperties = exports.notOnMethods = exports.notOnClasses = exports.onlyOnProperties = exports.onlyOnMethods = exports.onlyOnClasses = undefined;

var _utils = require('../utils');

var onlyOnClasses = exports.onlyOnClasses = function onlyOnClasses(descriptor, decorator) {
    if ((0, _utils.getSource)(descriptor) != 'class') throw new SyntaxError('@' + decorator + ' can only be used on classes');
};

var onlyOnMethods = exports.onlyOnMethods = function onlyOnMethods(descriptor, decorator) {
    if ((0, _utils.getSource)(descriptor) != 'method') throw new SyntaxError('@' + decorator + ' can only be used on methods');
};

var onlyOnProperties = exports.onlyOnProperties = function onlyOnProperties(descriptor, decorator) {
    if ((0, _utils.getSource)(descriptor) != 'property') throw new SyntaxError('@' + decorator + ' can only be used on properties');
};

var notOnClasses = exports.notOnClasses = function notOnClasses(descriptor, decorator) {
    if ((0, _utils.getSource)(descriptor) === 'class') throw new SyntaxError('@' + decorator + ' cannot be used on classes');
};

var notOnMethods = exports.notOnMethods = function notOnMethods(descriptor, decorator) {
    if ((0, _utils.getSource)(descriptor) === 'method') throw new SyntaxError('@' + decorator + ' cannot be used on methods');
};

var notOnProperties = exports.notOnProperties = function notOnProperties(descriptor, decorator) {
    if ((0, _utils.getSource)(descriptor) === 'property') throw new SyntaxError('@' + decorator + ' cannot be used on Properties');
};