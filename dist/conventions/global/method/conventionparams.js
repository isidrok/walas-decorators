'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionParams = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conventionbase = require('../../conventionbase');

var _walasMetaApi = require('walas-meta-api');

var _utils = require('../../utils');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //TODO needs a lot of refactoring


/**
 * PRECONDITION: must be called after ConventionMethods, and
 * the Conventions 'Get', 'Post', 'Put', 'Patch' and 'Delete'.
 * For all methods, gets its parameters from the method call and
 * if they correspond with a property of the class they are inserted
 * as the parameters of the method, according to the method verb.
 * @export
 * @class ConventionParams
 * @extends {ConventionBase}
 */
var ConventionParams = exports.ConventionParams = function (_ConventionBase) {
    _inherits(ConventionParams, _ConventionBase);

    function ConventionParams(entity, meta) {
        _classCallCheck(this, ConventionParams);

        return _possibleConstructorReturn(this, (ConventionParams.__proto__ || Object.getPrototypeOf(ConventionParams)).call(this, entity, meta));
    }

    _createClass(ConventionParams, [{
        key: 'getMetaIds',
        value: function getMetaIds() {
            return (0, _walasMetaApi.getMeta)(this._meta, 'class.ids');
        }
    }, {
        key: 'getMetaProps',
        value: function getMetaProps() {
            return (0, _walasMetaApi.getMeta)(this._meta, 'properties');
        }
    }, {
        key: 'getCallParams',
        value: function getCallParams(methodName) {
            return (0, _utils.getMethods)(this._entity).filter(function (c) {
                return c.name === methodName;
            })[0].value.toString().match(/\((.*?)\)/)[1].split(',').map(function (c) {
                return c.trim();
            });
        }
    }, {
        key: 'handle',
        value: function handle(method) {
            var handlers = {
                'post': this.handlePost,
                'put': this.handlePutPatch,
                'patch': this.handlePutPatch,
                'get': this.handleGetDelete,
                'delete': this.handleGetDelete
            };
            return handlers[method.verb].bind(this)(method);
        }
    }, {
        key: 'addInformationFromAttr',
        value: function addInformationFromAttr(params) {
            var _this2 = this;

            var paramNames = Object.keys(params);
            paramNames.forEach(function (p) {
                var prop = _this2._meta.properties[p];
                var param = params[p];
                param.description = param.description || prop.description;
                param.required = param.required || prop.required;
                params[p] = param;
            });
        }
    }, {
        key: 'handleGetDelete',
        value: function handleGetDelete(method) {
            var params = method.params;
            this.addInformationFromAttr(params);
            var ids = this._meta.class.ids;
            var paramNames = Object.keys(params);
            paramNames.forEach(function (p) {
                if (ids.indexOf(p) !== -1) params[p].in = params[p].in || 'path';else params[p].in = params[p].in || 'query';
            });
        }
    }, {
        key: 'handlePutPatch',
        value: function handlePutPatch(method) {
            var params = method.params;
            this.addInformationFromAttr(params);
            var ids = this._meta.class.ids;
            var paramNames = Object.keys(params);
            paramNames.forEach(function (p) {
                if (ids.indexOf(p) !== -1) params[p].in = params[p].in || 'path';else params[p].in = params[p].in || 'body';
            });
        }
    }, {
        key: 'handlePost',
        value: function handlePost(method) {
            var params = method.params;
            this.addInformationFromAttr(params);
            var paramNames = Object.keys(params);
            paramNames.forEach(function (p) {
                params[p].in = params[p].in || 'body';
            });
        }
    }, {
        key: 'exec',
        value: function exec() {
            var _this3 = this;

            var methods = (0, _walasMetaApi.getMeta)(this._meta, this.methods) || {};
            Object.keys(methods).forEach(function (key) {
                var callParams = _this3.getCallParams(key);
                var method = methods[key];
                var params = method.params || {};
                var paramNames = params ? Object.keys(params) : [];
                var metaProps = _this3.getMetaProps();
                var propNames = metaProps ? Object.keys(metaProps) : [];
                callParams.forEach(function (param) {
                    if (paramNames.indexOf(param) === -1 && propNames.indexOf(param) !== -1) params[param] = {};
                });
                method.params = params;
                _this3.handle(method);
            });
        }
    }, {
        key: 'methods',
        get: function get() {
            return 'methods';
        }
    }, {
        key: 'properties',
        get: function get() {
            return 'properties';
        }
    }]);

    return ConventionParams;
}(_conventionbase.ConventionBase);