'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DbContext = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
// import { Query } from './query';


var _statemanager = require('./statemanager');

var _states = require('./states');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DbContext = exports.DbContext = function () {
    function DbContext() {
        _classCallCheck(this, DbContext);

        this._stateManager = new _statemanager.StateManager();
        this._conventions = [];
        // configuration(this._conventions);
    }

    _createClass(DbContext, [{
        key: 'setState',
        value: function setState(entity, state) {
            this._stateManager.addEntry({ entity: entity, state: state });
        }
    }, {
        key: 'saveChanges',
        value: function saveChanges() {
            //TODO: implement UOW
            this._stateManager.reset();
        }
    }, {
        key: 'configuration',
        value: function configuration() {}
    }]);

    return DbContext;
}();