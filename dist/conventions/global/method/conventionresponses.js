'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionResponses = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conventionbase = require('../../conventionbase');

var _walasMetaApi = require('walas-meta-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * PRECONDITION: must be called after ConventionMethods, and 
 * the Conventions 'Get', 'Post', 'Put', 'Patch' and 'Delete'.
 * Sets the default responses for the methods of according to its verb.
 * @export
 * @class ConventionResponses
 * @extends {ConventionBase}
 */
var ConventionResponses = exports.ConventionResponses = function (_ConventionBase) {
    _inherits(ConventionResponses, _ConventionBase);

    function ConventionResponses(entity, meta) {
        _classCallCheck(this, ConventionResponses);

        return _possibleConstructorReturn(this, (ConventionResponses.__proto__ || Object.getPrototypeOf(ConventionResponses)).call(this, entity, meta));
    }

    _createClass(ConventionResponses, [{
        key: 'handle',
        value: function handle(method) {
            var handlers = {
                'post': this.handlePost,
                'put': this.handlePutPatch,
                'patch': this.handlePutPatch,
                'get': this.handleGet,
                'delete': this.handleDelete
            };

            return handlers[method.verb].bind(this)(method);
        }
    }, {
        key: 'handleGet',
        value: function handleGet(method) {
            var responses = method.responses || {};
            responses['200'] = responses['200'] || this.response200;
            responses['404'] = responses['404'] || this.response404;
            method.responses = responses;
        }
    }, {
        key: 'handlePost',
        value: function handlePost(method) {
            var responses = method.responses || {};
            responses['400'] = responses['400'] || this.response400;
            method.responses = responses;
        }
    }, {
        key: 'handlePutPatch',
        value: function handlePutPatch(method) {
            var responses = method.responses || {};
            responses['200'] = responses['200'] || this.response200;
            responses['400'] = responses['400'] || this.response400;
            responses['404'] = responses['404'] || this.response404;
            method.responses = responses;
        }
    }, {
        key: 'handleDelete',
        value: function handleDelete(method) {
            var responses = method.responses || {};
            responses['200'] = responses['200'] || this.response200;
            responses['404'] = responses['404'] || this.response404;
            method.responses = responses;
        }
    }, {
        key: 'exec',
        value: function exec() {
            var _this2 = this;

            var methods = (0, _walasMetaApi.getMeta)(this._meta, this.methods) || {};
            Object.keys(methods).forEach(function (key) {
                var method = methods[key];
                _this2.handle(method);
            });
        }
    }, {
        key: 'methods',
        get: function get() {
            return 'methods';
        }
    }, {
        key: 'response200',
        get: function get() {
            return 'OK';
        }
    }, {
        key: 'response400',
        get: function get() {
            return 'Bad Request';
        }
    }, {
        key: 'response404',
        get: function get() {
            return 'Not Found';
        }
    }]);

    return ConventionResponses;
}(_conventionbase.ConventionBase);