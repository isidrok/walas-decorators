'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionMethods = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conventionbase = require('../../conventionbase');

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Will add every method of a given entity into the methods
 * of the metainformation with the form ['methodName'] : {}
 * @export
 * @class ConventionProperties
 * @extends {ConventionBase}
 */
var ConventionMethods = exports.ConventionMethods = function (_ConventionBase) {
    _inherits(ConventionMethods, _ConventionBase);

    function ConventionMethods(entity, meta) {
        _classCallCheck(this, ConventionMethods);

        return _possibleConstructorReturn(this, (ConventionMethods.__proto__ || Object.getPrototypeOf(ConventionMethods)).call(this, entity, meta));
    }

    _createClass(ConventionMethods, [{
        key: 'route',
        value: function route(prop) {
            return this.property + '.' + prop;
        }
    }, {
        key: 'exec',
        value: function exec() {
            var _this2 = this;

            var entityMethods = (0, _utils.getMethods)(this._entity);
            entityMethods = entityMethods ? entityMethods.map(function (c) {
                return c.name;
            }) : [];
            var metaMethods = this._meta[this.property] ? Object.keys(this._meta[this.property]) : undefined;
            entityMethods.forEach(function (method) {
                if (!metaMethods || metaMethods.indexOf(method) === -1) (0, _walasMetaApi.insertMeta)(_this2._meta, _this2.route(method), {});
            });
        }
    }, {
        key: 'property',
        get: function get() {
            return 'methods';
        }
    }]);

    return ConventionMethods;
}(_conventionbase.ConventionBase);