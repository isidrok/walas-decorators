import { ConventionBase } from '../../conventionbase';
import { getProperties } from '../../utils';
import { insertMeta } from '../../../api';

/**
 * Will add every property of a given entity into the properties
 * of the metainformation with the form ['propertyName'] : {}
 * @export
 * @class ConventionProperties
 * @extends {ConventionBase}
 */
export class ConventionProperties extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get property() {
        return 'properties';
    }
    route(prop) {
        return this.property + '.' + prop;
    }
    exec() {
        let entityProperties = getProperties(this._entity);
        let metaProperties = this._meta[this.property] ? Object.keys(this._meta[this.property]) : undefined;
        entityProperties.forEach(prop => {
            if (!metaProperties || metaProperties.indexOf(prop) === -1)
                insertMeta(this._meta, this.route(prop), {});
        });
    }
}