import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from 'walas-meta-api';

/*Precondition: ConventionProperties has been applyed before applying this convention*/

/**
 * If there is a property with the name 'description' then
 * if its 'property' property doesn't have type or length,
 * they will be set to 'string' and 50.
 * @export
 * @class ConventionColumnDescription
 * @extends {ConventionBase}
 */
export class ConventionColumnDescription extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route(){
        return 'properties.description'
    }
    exec() {
        let description = getMeta(this._meta, this.route);
        if(!description || (description.property && description.property.type)) return;
        let property = description.property || {};
        property.type = 'string';
        property.length = property.length || 50;
        insertMeta(this._meta, this.route + '.property', property);
    }
}
