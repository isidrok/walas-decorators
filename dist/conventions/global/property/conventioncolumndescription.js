'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConventionColumnDescription = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _conventionbase = require('../../conventionbase');

var _walasMetaApi = require('walas-meta-api');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*Precondition: ConventionProperties has been applyed before applying this convention*/

/**
 * If there is a property with the name 'description' then
 * if its 'property' property doesn't have type or length,
 * they will be set to 'string' and 50.
 * @export
 * @class ConventionColumnDescription
 * @extends {ConventionBase}
 */
var ConventionColumnDescription = exports.ConventionColumnDescription = function (_ConventionBase) {
    _inherits(ConventionColumnDescription, _ConventionBase);

    function ConventionColumnDescription(entity, meta) {
        _classCallCheck(this, ConventionColumnDescription);

        return _possibleConstructorReturn(this, (ConventionColumnDescription.__proto__ || Object.getPrototypeOf(ConventionColumnDescription)).call(this, entity, meta));
    }

    _createClass(ConventionColumnDescription, [{
        key: 'exec',
        value: function exec() {
            var description = (0, _walasMetaApi.getMeta)(this._meta, this.route);
            if (!description || description.property && description.property.type) return;
            var property = description.property || {};
            property.type = 'string';
            property.length = property.length || 50;
            (0, _walasMetaApi.insertMeta)(this._meta, this.route + '.property', property);
        }
    }, {
        key: 'route',
        get: function get() {
            return 'properties.description';
        }
    }]);

    return ConventionColumnDescription;
}(_conventionbase.ConventionBase);