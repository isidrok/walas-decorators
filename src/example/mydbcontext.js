import { DbContext, DbSet } from '../orm';
import { ConventionId, getMetaEntities } from '../conventions';
import { Foo } from './foo';
export class MyDbContext extends DbContext {
    constructor() {
        super();
        this._conventions = [ConventionId];
    }
    get Foo() {
        return new DbSet(Foo, this);
    }

    configuration() {
        let entities = getMetaEntities(MyDbContext);
        entities.forEach(entity => {
            this._conventions.map(convention => new convention(entity.entity, entity.meta).exec());
        });
    }
}