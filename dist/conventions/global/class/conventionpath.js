'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionPath = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _pluralize = require('pluralize');

var _conventionbase = require('../../conventionbase');

var _walasMetaApi = require('walas-meta-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * If the metainformation of the class does not have a path it will be build
 * using the pluralized name of the class and apending a backslash at the beggining
 * @export
 * @class ConventionPath
 * @extends {ConventionBase}
 */
var ConventionPath = exports.ConventionPath = function (_ConventionBase) {
    _inherits(ConventionPath, _ConventionBase);

    function ConventionPath(entity, meta) {
        _classCallCheck(this, ConventionPath);

        return _possibleConstructorReturn(this, (ConventionPath.__proto__ || Object.getPrototypeOf(ConventionPath)).call(this, entity, meta));
    }

    _createClass(ConventionPath, [{
        key: 'exec',
        value: function exec() {
            if ((0, _walasMetaApi.getMeta)(this._meta, this.route)) return;
            (0, _walasMetaApi.insertMeta)(this._meta, this.route, this.property);
        }
    }, {
        key: 'route',
        get: function get() {
            return 'class.path';
        }
    }, {
        key: 'property',
        get: function get() {
            return '/' + (0, _pluralize.plural)(this._entity.name.toLowerCase());
        }
    }]);

    return ConventionPath;
}(_conventionbase.ConventionBase);