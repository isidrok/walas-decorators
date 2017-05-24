import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from '../../../api';


/**
 * PRECONDITION: gets called after 'ConventionProperties'
 * Generates the second parameter of JSON.stringify for serializin.
 * If the class is flagged with @Private then it won't be serialized,
 * the properties flagged with @Ignore won't be serialized either.
 * @export
 * @class ConventionSerialize
 * @extends {ConventionBase}
 */
export class ConventionSerialize extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route() {
        return 'class.serialize';
    }

    exec() {
        if(getMeta(this._meta, 'class.private')) return;
        let properties = getMeta(this._meta, 'properties');
        let serialize = [];
        Object.keys(properties).forEach(key => {
            if(!properties[key].ignore ) serialize.push([key]);
        });
        insertMeta(this._meta, this.route, serialize);
    }
}