'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Student = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

var _mapping = require('../decorators/mapping');

var _rest = require('../decorators/rest');

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

var Student = exports.Student = (_dec = (0, _mapping.Entity)({ schema: 'Schema', table: 'STUDENTS', provider: 'sqlserver' }), _dec2 = (0, _rest.Path)('./students'), _dec3 = (0, _mapping.Id)(), _dec4 = (0, _mapping.Property)({ name: 'ID', type: 'int' }), _dec5 = (0, _mapping.Property)({ length: 20 }), _dec6 = (0, _mapping.Ignore)(), _dec7 = (0, _mapping.Property)({ name: 'PASSWORD', type: 'sting', dbtype: 'varchar', length: 50 }), _dec8 = (0, _mapping.HasMany)({ name: 'Course', provider: 'mysql' }), _dec9 = (0, _mapping.ManyToMany)({ name: 'Course', destination: 'studentCourses', provider: 'mysql' }), _dec10 = (0, _mapping.HasOne)({ name: 'Group', provider: 'sqlserver' }), _dec11 = (0, _rest.Get)('/'), _dec12 = (0, _rest.Param)('id2'), _dec13 = (0, _rest.Param)({ 'id': { in: 'query' } }), _dec14 = (0, _rest.Description)('search student by id'), _dec15 = (0, _rest.Response)('500', '500Error'), _dec16 = (0, _rest.Responses)({ '200': 'ok', '400': 'error' }), _dec(_class = _dec2(_class = (_class2 = function () {
    function Student() {
        _classCallCheck(this, Student);

        Object.defineProperty(this, 'id', {
            enumerable: true,
            writable: true,
            value: _initializerWarningHelper(_descriptor, this)
        });
        Object.defineProperty(this, 'description', {
            enumerable: true,
            writable: true,
            value: _initializerWarningHelper(_descriptor2, this)
        });
        Object.defineProperty(this, 'password', {
            enumerable: true,
            writable: true,
            value: _initializerWarningHelper(_descriptor3, this)
        });
        Object.defineProperty(this, 'courses', {
            enumerable: true,
            writable: true,
            value: _initializerWarningHelper(_descriptor4, this)
        });
        Object.defineProperty(this, 'group', {
            enumerable: true,
            writable: true,
            value: _initializerWarningHelper(_descriptor5, this)
        });
    }

    _createClass(Student, [{
        key: 'searchStudentById',
        value: function searchStudentById(id) {
            console.log('Searching student with id: ' + id);
        }
    }]);

    return Student;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, 'id', [_dec3, _dec4], {
    enumerable: true,
    initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, 'description', [_dec5], {
    enumerable: true,
    initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, 'password', [_dec6, _dec7], {
    enumerable: true,
    initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, 'courses', [_dec8, _dec9], {
    enumerable: true,
    initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, 'group', [_dec10], {
    enumerable: true,
    initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, 'searchStudentById', [_dec11, _dec12, _dec13, _dec14, _dec15, _dec16], Object.getOwnPropertyDescriptor(_class2.prototype, 'searchStudentById'), _class2.prototype)), _class2)) || _class) || _class);


var instance = new Student();
console.log(instance);