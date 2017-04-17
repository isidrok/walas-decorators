'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionProperties = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conventionbase = require('../../conventionbase');

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Will add every property of a given entity into the properties
 * of the metainformation with the form ['propertyName'] : {}
 * @export
 * @class ConventionProperties
 * @extends {ConventionBase}
 */
var ConventionProperties = exports.ConventionProperties = function (_ConventionBase) {
    _inherits(ConventionProperties, _ConventionBase);

    function ConventionProperties(entity, meta) {
        _classCallCheck(this, ConventionProperties);

        return _possibleConstructorReturn(this, (ConventionProperties.__proto__ || Object.getPrototypeOf(ConventionProperties)).call(this, entity, meta));
    }

    _createClass(ConventionProperties, [{
        key: 'route',
        value: function route(prop) {
            return this.property + '.' + prop;
        }
    }, {
        key: 'exec',
        value: function exec() {
            var _this2 = this;

            var entityProperties = (0, _utils.getProperties)(this._entity);
            var metaProperties = this._meta[this.property] ? Object.keys(this._meta[this.property]) : undefined;
            entityProperties.forEach(function (prop) {
                if (!metaProperties || metaProperties.indexOf(prop) === -1) (0, _walasMetaApi.insertMeta)(_this2._meta, _this2.route(prop), {});
            });
        }
    }, {
        key: 'property',
        get: function get() {
            return 'properties';
        }
    }]);

    return ConventionProperties;
}(_conventionbase.ConventionBase);