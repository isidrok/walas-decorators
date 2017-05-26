import { Id, Property, Entity, Ignore, Private, Description, HasOne, HasMany, Queryable, Params } from '../decorators';
import { Bar } from './Bar';
export class Foo {
    constructor() {
    }
    get id() { return this._id; }

    @HasMany(Bar)
    get bars() { return this._bars; }
}
