import { getMetaEntities } from 'walas-meta-api';
import { DbContext, DbSet } from './orm';
import {
    ConventionId,ConventionPropagateHasMany, ConventionPath, ConventionQueryable, ConventionSerialize, ConventionTable,
    ConventionAutoGet, ConventionDelete, ConventionDescription, ConventionMethods, ConventionGet, ConventionParams,
    ConventionPatch, ConventionPost, ConventionPut, ConventionResponses, ConventionSummary,
    ConventionDecimal, ConventionColumnDescription, ConventionProperties, ConventionString
} from '../conventions';
import { Foo } from './foo';
import { Bar } from './bar';

export class MyDbContext extends DbContext {
    constructor() {
        super();
        this._conventions = [ConventionId,ConventionPropagateHasMany, ConventionPath, ConventionQueryable, ConventionProperties, ConventionSerialize, ConventionTable, ConventionColumnDescription,
            ConventionDecimal, ConventionString, ConventionMethods, ConventionDescription, ConventionSummary, 
            ConventionDelete, ConventionPatch, ConventionPut, ConventionPost, ConventionGet, ConventionParams, ConventionResponses, ConventionAutoGet];
        this._Foo = new DbSet(Foo, this);
        this._Bar = new DbSet(Bar, this);
}
    get Foo() {
        return this._Foo;
    }
    get Bar () {
        return this._Bar;
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