'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionString = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conventionbase = require('../../conventionbase');

var _walasMetaApi = require('walas-meta-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * If a property is of type 'string' then
 * its default length is 50
 * @export
 * @class ConventionString
 * @extends {ConventionBase}
 */
var ConventionString = exports.ConventionString = function (_ConventionBase) {
    _inherits(ConventionString, _ConventionBase);

    function ConventionString(entity, meta) {
        _classCallCheck(this, ConventionString);

        return _possibleConstructorReturn(this, (ConventionString.__proto__ || Object.getPrototypeOf(ConventionString)).call(this, entity, meta));
    }

    _createClass(ConventionString, [{
        key: 'exec',
        value: function exec() {
            var properties = (0, _walasMetaApi.getMeta)(this._meta, this.properties);
            Object.keys(properties).forEach(function (prop) {
                var props = properties[prop].property;
                if (!props) return;
                if (props.type === 'string') props.length = props.length || 50;
            });
        }
    }, {
        key: 'properties',
        get: function get() {
            return 'properties';
        }
    }]);

    return ConventionString;
}(_conventionbase.ConventionBase);