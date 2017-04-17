'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionAutoGet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conventionbase = require('../../conventionbase');

var _walasMetaApi = require('walas-meta-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * If the class is not flagged with 'supressGet' then
 * the methods get and getAll will be automatically generated
 * @export
 * @class ConventionAutoGet
 * @extends {ConventionBase}
 */
var ConventionAutoGet = exports.ConventionAutoGet = function (_ConventionBase) {
    _inherits(ConventionAutoGet, _ConventionBase);

    function ConventionAutoGet(entity, meta) {
        _classCallCheck(this, ConventionAutoGet);

        return _possibleConstructorReturn(this, (ConventionAutoGet.__proto__ || Object.getPrototypeOf(ConventionAutoGet)).call(this, entity, meta));
    }

    _createClass(ConventionAutoGet, [{
        key: 'insertGet',
        value: function insertGet() {
            var get = {
                verb: 'get',
                url: '/:id',
                params: { id: {} }
            };
            var property = 'methods.get';
            (0, _walasMetaApi.insertMeta)(this._meta, property, get);
        }
    }, {
        key: 'insertGetAll',
        value: function insertGetAll() {
            var getAll = { verb: 'get', url: '' };
            var property = 'methods.getAll';
            (0, _walasMetaApi.insertMeta)(this._meta, property, getAll);
        }
    }, {
        key: 'exec',
        value: function exec() {
            var supressGet = void 0;
            var generators = (0, _walasMetaApi.getMeta)(this._meta, this.generators);
            if (generators) supressGet = Object.keys(generators).filter(function (c) {
                return c === 'supressGet';
            })[0];
            if (supressGet) return;
            this.insertGet();
            this.insertGetAll();
        }
    }, {
        key: 'generators',
        get: function get() {
            return 'class.generators';
        }
    }]);

    return ConventionAutoGet;
}(_conventionbase.ConventionBase);