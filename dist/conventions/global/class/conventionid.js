'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionId = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conventionbase = require('../../conventionbase');

var _utils = require('../../utils');

var _walasMetaApi = require('walas-meta-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * If the 'ids' property of the metainformation related to the class is empty,
 * the attribute of the class called 'id' will be inserted in the 'ids' of the class.
 * If there are not ids for the class an Error will be thrown.
 * @export
 * @class ConventionId
 * @extends {ConventionBase}
 */
var ConventionId = exports.ConventionId = function (_ConventionBase) {
    _inherits(ConventionId, _ConventionBase);

    function ConventionId(entity, meta) {
        _classCallCheck(this, ConventionId);

        return _possibleConstructorReturn(this, (ConventionId.__proto__ || Object.getPrototypeOf(ConventionId)).call(this, entity, meta));
    }

    _createClass(ConventionId, [{
        key: 'exec',
        value: function exec() {
            var ids = (0, _walasMetaApi.getMeta)(this._meta, this.route);
            if (ids && ids[0]) return;
            var properties = (0, _utils.getProperties)(this._entity);
            if (properties.indexOf(this.property) === -1) throw new Error('Entity does not have an id');
            (0, _walasMetaApi.insertMeta)(this._meta, this.route, this.property, true);
        }
    }, {
        key: 'route',
        get: function get() {
            return 'class.ids';
        }
    }, {
        key: 'property',
        get: function get() {
            return 'id';
        }
    }]);

    return ConventionId;
}(_conventionbase.ConventionBase);