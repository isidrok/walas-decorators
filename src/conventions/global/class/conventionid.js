import { ConventionBase } from '../../conventionbase';
import { getProperties } from '../../utils';
import { insertMeta, getMeta } from '../../../api';
export class ConventionId extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route() {
        return 'class.ids';
    }
    get property() {
        return 'id';
    }
    exec() {
        let ids = getMeta(this._meta,this.route);
        if (ids && ids[0]) return;
        let properties = getProperties(this._entity);
        if (properties.indexOf(this.property) === -1)
            throw new Error('Entity does not have an id');
        insertMeta(this._meta, this.route, this.property, true);
    }
}