'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionSerialize = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conventionbase = require('../../conventionbase');

var _walasMetaApi = require('walas-meta-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * PRECONDITION: gets called after 'ConventionProperties'
 * Generates the second parameter of JSON.stringify for serializin.
 * If the class is flagged with @Private then it won't be serialized,
 * the properties flagged with @Ignore won't be serialized either.
 * @export
 * @class ConventionSerialize
 * @extends {ConventionBase}
 */
var ConventionSerialize = exports.ConventionSerialize = function (_ConventionBase) {
    _inherits(ConventionSerialize, _ConventionBase);

    function ConventionSerialize(entity, meta) {
        _classCallCheck(this, ConventionSerialize);

        return _possibleConstructorReturn(this, (ConventionSerialize.__proto__ || Object.getPrototypeOf(ConventionSerialize)).call(this, entity, meta));
    }

    _createClass(ConventionSerialize, [{
        key: 'exec',
        value: function exec() {
            if ((0, _walasMetaApi.getMeta)(this._meta, 'class.private')) return;
            var properties = (0, _walasMetaApi.getMeta)(this._meta, 'properties');
            var serialize = [];
            Object.keys(properties).forEach(function (key) {
                if (!properties[key].ignore) serialize.push([key]);
            });
            (0, _walasMetaApi.insertMeta)(this._meta, this.route, serialize);
        }
    }, {
        key: 'route',
        get: function get() {
            return 'class.serialize';
        }
    }]);

    return ConventionSerialize;
}(_conventionbase.ConventionBase);