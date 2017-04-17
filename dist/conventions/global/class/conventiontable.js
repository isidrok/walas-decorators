'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionTable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conventionbase = require('../../conventionbase');

var _walasMetaApi = require('walas-meta-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //TODO Schema


/**
 * If the 'table' property of 'class.entity' is not set
 * then the name of the class will be used.
 * @export
 * @class ConventionTable
 * @extends {ConventionBase}
 */
var ConventionTable = exports.ConventionTable = function (_ConventionBase) {
    _inherits(ConventionTable, _ConventionBase);

    function ConventionTable(entity, meta) {
        _classCallCheck(this, ConventionTable);

        return _possibleConstructorReturn(this, (ConventionTable.__proto__ || Object.getPrototypeOf(ConventionTable)).call(this, entity, meta));
    }

    _createClass(ConventionTable, [{
        key: 'exec',
        value: function exec() {
            if ((0, _walasMetaApi.getMeta)(this._meta, this.route)) return;
            (0, _walasMetaApi.insertMeta)(this._meta, this.route, this._entity.name);
        }
    }, {
        key: 'route',
        get: function get() {
            return 'class.entity.table';
        }
    }]);

    return ConventionTable;
}(_conventionbase.ConventionBase);