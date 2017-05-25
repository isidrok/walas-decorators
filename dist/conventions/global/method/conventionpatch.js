'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionPatch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conventionbase = require('../../conventionbase');

var _walasMetaApi = require('walas-meta-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * PRECONDITION: gets called after ConventionMethods
 * Finds all method whose name starts with 'patch'
 * and sets its verb to 'patch'
 * @export
 * @class ConventionPatch
 * @extends {ConventionBase}
 */
var ConventionPatch = exports.ConventionPatch = function (_ConventionBase) {
    _inherits(ConventionPatch, _ConventionBase);

    function ConventionPatch(entity, meta) {
        _classCallCheck(this, ConventionPatch);

        return _possibleConstructorReturn(this, (ConventionPatch.__proto__ || Object.getPrototypeOf(ConventionPatch)).call(this, entity, meta));
    }

    _createClass(ConventionPatch, [{
        key: 'createMethod',
        value: function createMethod(method) {
            //let url = '/:' + method.params.map(c => Object.keys(c)[0]).join('/:');
            method.verb = 'patch';
            // method.url = method.url || url;
            return method;
        }
    }, {
        key: 'exec',
        value: function exec() {
            var _this2 = this;

            var methods = (0, _walasMetaApi.getMeta)(this._meta, this.route);
            Object.keys(methods).forEach(function (key) {
                if (key.startsWith('patch') && !methods[key].verb) {
                    var route = _this2.route + '.' + key;
                    (0, _walasMetaApi.insertMeta)(_this2._meta, route, _this2.createMethod(methods[key]));
                }
            });
        }
    }, {
        key: 'route',
        get: function get() {
            return 'methods';
        }
    }]);

    return ConventionPatch;
}(_conventionbase.ConventionBase);