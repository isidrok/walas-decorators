"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var insertOnProperties = exports.insertOnProperties = function insertOnProperties(key, decorator) {
    return "properties." + key + "." + decorator.name.toLowerCase();
};