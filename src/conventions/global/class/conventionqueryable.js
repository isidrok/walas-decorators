import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from '../../../api';
export class ConventionQueryable extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route() {
        return 'class.queryable';
    }
    get properties() {
        return 'class.properties';
    }
    exec() {
        if (getMeta(this._meta, this.route)) return;
        let properties = getMeta(this._meta, this.properties);
        Object.keys(properties).forEach(key =>{
            let relation = properties[key].hasMany || properties[key].hasOne;
            if(relation) insertMeta(this._meta, this.route, relation, true);
        });
        insertMeta(this._meta, this.route, this._entity.name, true);
    }
}