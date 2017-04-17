"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var insertOnMethods = exports.insertOnMethods = function insertOnMethods(key, decorator) {
    return "methods." + key + "." + decorator.name.toLowerCase();
};