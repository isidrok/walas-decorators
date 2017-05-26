'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _desc, _value, _class2, _descriptor, _descriptor2;

var _decorators = require('./decorators');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}

var Client = (_dec = (0, _decorators.Path)('/clients'), _dec2 = (0, _decorators.Description)('client entity'), _dec3 = (0, _decorators.Min)(10), _dec4 = (0, _decorators.Max)(70), _dec5 = (0, _decorators.Required)(), _dec6 = (0, _decorators.Description)('id of the client'), _dec7 = (0, _decorators.NotBlank)(), _dec8 = (0, _decorators.Pattern)('id%', null), _dec9 = (0, _decorators.Description)('full name of the client'), _dec10 = (0, _decorators.Length)(50), _dec11 = (0, _decorators.NotNull)(), _dec12 = (0, _decorators.Range)({ Min: 20, Max: 90 }), _dec13 = (0, _decorators.Pattern)('[!·:;*]{}', ''), _dec14 = (0, _decorators.Get)('/:id?'), _dec15 = (0, _decorators.Description)(), _dec16 = (0, _decorators.Response)('200', 'OK'), _dec17 = (0, _decorators.Params)('id', 'fullName', { name: 'Walas' }), _dec18 = (0, _decorators.Get)('/:name?'), _dec19 = (0, _decorators.Summary)('this is a little Summary'), _dec20 = (0, _decorators.Param)({ name: 'string', required: 'boolean' }), _dec21 = (0, _decorators.Responses)({ '200': 'Ok', '400': 'Error' }), _dec(_class = _dec2(_class = (_class2 = function () {
    function Client() {
        _classCallCheck(this, Client);

        Object.defineProperty(this, 'id', {
            enumerable: true,
            writable: true,
            value: _initializerWarningHelper(_descriptor, this)
        });
        Object.defineProperty(this, 'fullName', {
            enumerable: true,
            writable: true,
            value: _initializerWarningHelper(_descriptor2, this)
        });
    }

    _createClass(Client, [{
        key: 'searchClientById',
        value: function searchClientById(id) {
            console.log('searching client with id ' + id);
        }
    }, {
        key: 'searchClientByName',
        value: function searchClientByName(name) {
            console.log('searching client with name ' + name);
        }
    }]);

    return Client;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'id', [_dec3, _dec4, _dec5, _dec6, _dec7, _dec8], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'fullName', [_dec9, _dec10, _dec11, _dec12, _dec13], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, 'searchClientById', [_dec14, _dec15, _dec16, _dec17], Object.getOwnPropertyDescriptor(_class2.prototype, 'searchClientById'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'searchClientByName', [_dec18, _dec19, _dec20, _dec21], Object.getOwnPropertyDescriptor(_class2.prototype, 'searchClientByName'), _class2.prototype)), _class2)) || _class) || _class);


var instance = new Client();
console.log(instance);