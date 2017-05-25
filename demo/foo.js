import { Id, Property, Entity, Ignore, Private, Description, HasOne, HasMany, Queryable, Params } from '../decorators';
import { Bar } from './Bar';
@Queryable('Bar')
export class Foo {
    constructor() {
    }

    get id() { return this._id; }
    @Property({ type: 'string' }) get name() { return this._name; }
    @HasMany('MANY') get description() { return this._description; }
    @HasOne('Bar') get bar() { return this._bar; }

    @Params({id:{in:'test',type:'test'}}, {name:{in:'a',type:'b'}})
    deleteFoo(id,name) { return; }
}

let instance = new Foo();
console.log(instance);