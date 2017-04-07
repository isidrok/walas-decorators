import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from '../../../api';
/*precondition: this gets called after ConventionProperties */
export class ConventionSerialize extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route() {
        return 'class.serialize';
    }

    exec() {
        let properties = getMeta(this._meta, this.properties);
        let serialize = [];
        Object.keys(properties).forEach(key => {
            if(!properties[key].ignore && !properties[key].private)
                serialize.push[key];
        });
        insertMeta(this._meta, this.route, serialize);
    }
}