import { DbContext, DbSet } from '../orm';
import { ConventionId, ConventionProperties, ConventionTable, getMetaEntities } from '../conventions';
import { Foo } from './foo';
import {Bar} from './bar';
export class MyDbContext extends DbContext {
    constructor() {
        super();
        this._conventions = [ConventionId, ConventionProperties, ConventionTable];
    }
    get Foo() {
        return new DbSet(Foo, this);
    }
    get Bar() {
        return new DbSet(Bar, this);
    }

    configuration() {
        let entities = getMetaEntities(MyDbContext);
        entities.forEach(entity => {
            this._conventions.map(convention => new convention(entity.entity, entity.meta).exec());
        });
        console.log(entities);
    }
}