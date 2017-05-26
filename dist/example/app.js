'use strict';

var _mydbcontext = require('./mydbcontext');

var _foo = require('./foo');

var context = new _mydbcontext.MyDbContext();
var foo = new _foo.Foo();
context.Foo.add(foo);
context.configuration();