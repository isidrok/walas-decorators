import { getMetaEntities } from '../conventions';
import { DbContext, DbSet } from '../orm';
import {
    ConventionId, ConventionPath, ConventionQueryable, ConventionSerialize, ConventionTable,
    ConventionAutoGet, ConventionDelete, ConventionDescription, ConventionMethods, ConventionGet, ConventionParams,
    ConventionPatch, ConventionPost, ConventionPut, ConventionResponses, ConventionSummary,
    ConventionDecimal, ConventionColumnDescription, ConventionProperties, ConventionString
} from '../conventions';
import { Foo } from './foo';

export class MyDbContext extends DbContext {
    constructor() {
        super();
        this._conventions = [ConventionId, ConventionPath,ConventionQueryable, ConventionProperties, ConventionSerialize, ConventionTable, ConventionColumnDescription,
            ConventionDecimal, ConventionString, ConventionMethods, ConventionAutoGet, ConventionDescription, ConventionSummary,
            ConventionDelete, ConventionPatch, ConventionPut, ConventionPost, ConventionGet, ConventionResponses];
    }
    get Foo() {
        return new DbSet(Foo, this);
    }

    configuration() {
        let entities = getMetaEntities(MyDbContext);
        entities.forEach(entity => {
            this._conventions.map(convention => new convention(entity.entity, entity.meta).exec());
        });
        let _meta = entities[0].meta
        console.log(_meta);
    }
}