import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from '../../../api';
export class ConventionSerialize extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route() {
        return 'class.serialize';
    }

    exec() {
        //get properties from class and then insert in array...
        let properties = getMeta(this._meta, this.properties);
        Object.keys(properties).forEach(key => {
            let relation = properties[key].hasMany || properties[key].hasOne;
            if (relation) insertMeta(this._meta, this.route, relation, true);
        });
        insertMeta(this._meta, this.route, this._entity.name, true);
    }
}