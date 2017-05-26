'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Queryable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _helperqueryable = require('./utils/helperqueryable');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queryable = exports.Queryable = function () {
    function Queryable(entity, context) {
        _classCallCheck(this, Queryable);

        (0, _helperqueryable.validateEntity)(entity);
        (0, _helperqueryable.validateContext)(context);
        this._entity = entity;
        this._context = context;
        this._expression = {};
        this._provider = null; //TODO:resolve provider
    }

    _createClass(Queryable, [{
        key: 'select',
        value: function select(projection) {
            this._expression.select = projection.toString();
            return this;
        }
    }, {
        key: 'where',
        value: function where(predicate) {
            this._expression.where = predicate;
            return this;
        }
    }, {
        key: 'order',
        value: function order() {
            return this;
        }
    }, {
        key: 'provider',
        get: function get() {
            //TODO
            return this._provider;
        }
    }, {
        key: 'expression',
        get: function get() {
            return this._expression;
        }
    }]);

    return Queryable;
}();