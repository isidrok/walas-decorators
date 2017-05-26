'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionPropagateHasMany = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _walasMetaApi = require('walas-meta-api');

var _conventionbase = require('../../conventionbase');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * If there is a relation HasMany then that entity must have
 * a new property that referecences the id of the actual entity.
 * @export
 * @class ConventionDecimal
 * @extends {ConventionBase}
 */
var ConventionPropagateHasMany = exports.ConventionPropagateHasMany = function (_ConventionBase) {
    _inherits(ConventionPropagateHasMany, _ConventionBase);

    function ConventionPropagateHasMany(entity, meta) {
        _classCallCheck(this, ConventionPropagateHasMany);

        return _possibleConstructorReturn(this, (ConventionPropagateHasMany.__proto__ || Object.getPrototypeOf(ConventionPropagateHasMany)).call(this, entity, meta));
    }

    _createClass(ConventionPropagateHasMany, [{
        key: 'createProperty',
        value: function createProperty(relation) {
            var mainId = this._entity.name.toLowerCase() + 'Id';
            Object.defineProperty(relation.prototype, mainId, {
                enumerable: true,
                writable: true
            });
        }
    }, {
        key: 'exec',
        value: function exec() {
            var _this2 = this;

            var properties = (0, _walasMetaApi.getMeta)(this._meta, this.properties) || {};
            Object.keys(properties).forEach(function (key) {
                var relation = properties[key].hasMany;
                if (relation) _this2.createProperty(relation);
            });
        }
    }, {
        key: 'properties',
        get: function get() {
            return 'properties';
        }
    }]);

    return ConventionPropagateHasMany;
}(_conventionbase.ConventionBase);