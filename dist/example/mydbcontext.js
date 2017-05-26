'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyDbContext = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _walasMetaApi = require('walas-meta-api');

var _orm = require('./orm');

var _conventions = require('../conventions');

var _foo = require('./foo');

var _bar = require('./bar');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyDbContext = exports.MyDbContext = function (_DbContext) {
    _inherits(MyDbContext, _DbContext);

    function MyDbContext() {
        _classCallCheck(this, MyDbContext);

        var _this = _possibleConstructorReturn(this, (MyDbContext.__proto__ || Object.getPrototypeOf(MyDbContext)).call(this));

        _this._conventions = [_conventions.ConventionId, _conventions.ConventionPropagateHasMany, _conventions.ConventionPath, _conventions.ConventionQueryable, _conventions.ConventionProperties, _conventions.ConventionSerialize, _conventions.ConventionTable, _conventions.ConventionColumnDescription, _conventions.ConventionDecimal, _conventions.ConventionString, _conventions.ConventionMethods, _conventions.ConventionDescription, _conventions.ConventionSummary, _conventions.ConventionDelete, _conventions.ConventionPatch, _conventions.ConventionPut, _conventions.ConventionPost, _conventions.ConventionGet, _conventions.ConventionParams, _conventions.ConventionResponses, _conventions.ConventionAutoGet];
        _this._Foo = new _orm.DbSet(_foo.Foo, _this);
        _this._Bar = new _orm.DbSet(_bar.Bar, _this);
        return _this;
    }

    _createClass(MyDbContext, [{
        key: 'configuration',
        value: function configuration() {
            var _this2 = this;

            var entities = (0, _walasMetaApi.getMetaEntities)(MyDbContext);
            entities.forEach(function (entity) {
                _this2._conventions.map(function (convention) {
                    return new convention(entity.entity, entity.meta).exec();
                });
            });
            var _meta = entities[0].meta;
            console.log(_meta);
        }
    }, {
        key: 'Foo',
        get: function get() {
            return this._Foo;
        }
    }, {
        key: 'Bar',
        get: function get() {
            return this._Bar;
        }
    }]);

    return MyDbContext;
}(_orm.DbContext);