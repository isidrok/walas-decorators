import { ConventionBase } from '../../conventionbase';
import { getMethods } from '../../utils';
import { insertMeta } from 'walas-meta-api';

/**
 * Will add every method of a given entity into the methods
 * of the metainformation with the form ['methodName'] : {}
 * @export
 * @class ConventionProperties
 * @extends {ConventionBase}
 */
export class ConventionMethods extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get property() {
        return 'methods';
    }
    route(prop) {
        return this.property + '.' + prop;
    }
    exec() {
        let entityMethods = getMethods(this._entity);
        entityMethods = entityMethods ? entityMethods.map(c=>{ return c.name}) : [];
        let metaMethods = this._meta[this.property] ? Object.keys(this._meta[this.property]) : undefined;
        entityMethods.forEach(method => {
            if (!metaMethods || metaMethods.indexOf(method) === -1)
                insertMeta(this._meta, this.route(method), {});
        });
    }
}