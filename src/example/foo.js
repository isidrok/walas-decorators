import { Id, Property, Entity, Ignore, Private } from '../decorators';

export class Foo {
    constructor() {
    }

    get id() { return this._id; }

    @Property({type:'string'})
    get name() {return this._name;}

    get description() {return this._description;}
}

let instance = new Foo();
console.log(instance);