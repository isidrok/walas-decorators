'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionQueryable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conventionbase = require('../../conventionbase');

var _walasMetaApi = require('walas-meta-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Inserts in class.queryable the name of all queryable entities
 * which are the current entity and the entities referenced by
 * the class attributes flagged with hasOne or hasMany
 * @export
 * @class ConventionQueryable
 * @extends {ConventionBase}
 */
var ConventionQueryable = exports.ConventionQueryable = function (_ConventionBase) {
    _inherits(ConventionQueryable, _ConventionBase);

    function ConventionQueryable(entity, meta) {
        _classCallCheck(this, ConventionQueryable);

        return _possibleConstructorReturn(this, (ConventionQueryable.__proto__ || Object.getPrototypeOf(ConventionQueryable)).call(this, entity, meta));
    }

    _createClass(ConventionQueryable, [{
        key: 'exec',
        value: function exec() {
            var _this2 = this;

            var queryables = (0, _walasMetaApi.getMeta)(this._meta, this.route);
            var properties = (0, _walasMetaApi.getMeta)(this._meta, this.properties) || {};
            Object.keys(properties).forEach(function (key) {
                var relation = properties[key].hasMany || properties[key].hasOne;
                if (relation && queryables.indexOf(relation) === -1) (0, _walasMetaApi.insertMeta)(_this2._meta, _this2.route, relation, true);
            });
            if (queryables.indexOf(this._entity.name) === -1) (0, _walasMetaApi.insertMeta)(this._meta, this.route, this._entity.name, true);
        }
    }, {
        key: 'route',
        get: function get() {
            return 'class.queryable';
        }
    }, {
        key: 'properties',
        get: function get() {
            return 'properties';
        }
    }]);

    return ConventionQueryable;
}(_conventionbase.ConventionBase);