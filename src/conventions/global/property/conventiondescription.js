import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from '../../../api';

/*Precondition: ConventionProperties has been applyed before applying this convention*/
export class ConventionDescription extends ConventionBase {
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
        insertMeta(this._meta, this.route, property);
    }
}
