"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var insertOnClass = exports.insertOnClass = function insertOnClass(decorator) {
    return "class." + decorator.name.toLowerCase();
};