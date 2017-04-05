import { Id } from '../decorators';
@Id()
export class Foo {
    id=null;
}

let instance = new Foo();
console.log(instance);