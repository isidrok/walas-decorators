import { Id, Property, Entity } from '../decorators';
@Entity({name:'adad'})
export class Foo {
    constructor() {
    }

    get id() { return this._id }

    get name() {return this._name}
}

let instance = new Foo();
console.log(instance);