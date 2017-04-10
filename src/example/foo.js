import { Id, Property, Entity, Ignore, Private, Description,HasOne,HasMany, Queryable } from '../decorators';
import {Bar} from './Bar';
@Queryable('Bar')
export class Foo {
    constructor() {
    }

    get id() { return this._id; }

    @Property({type:'string'})
    get name() {return this._name;}
    @HasMany('MANY')

    get description() {return this._description;}

    @HasOne('Bar')
    get bar(){return this._bar;}

    deleteFoo(a,b,c){return;}
}

let instance = new Foo();
console.log(instance);