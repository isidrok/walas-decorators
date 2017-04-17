"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ConventionBase = exports.ConventionBase = function ConventionBase(entity, meta) {
    _classCallCheck(this, ConventionBase);

    this._entity = entity;
    this._meta = meta || {};
};