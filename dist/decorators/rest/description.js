'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Description = undefined;

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../utils');

//usage: @Description('Clients model for our system) class Client{...}
//or: @Description('search client by dni') searchClientByDni(dni){...}
//or: @Description('dni of the client') dni;
var Description = exports.Description = function Description() {
    for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
        params[_key] = arguments[_key];
    }

    return function (target, key, descriptor) {
        var source = (0, _utils.getSource)(descriptor);
        var container = source === 'method' ? 'methods' : 'properties';
        var keys = source === 'class' ? 'class.description' : container + '.' + key + '.description';
        (0, _walasMetaApi.setMeta)(target, keys, params[0]);
    };
};