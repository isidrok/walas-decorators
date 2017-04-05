import { ConventionBase } from '../../conventionbase';
import { getProperties } from '../../utils';
import { insertMeta } from '../../../api';
export class ConventionId extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get property() {
        return 'id';
    }
    exec() {
        let ids = this._meta.class && this._meta.class.ids;
        //if (ids) return;
        let properties = getProperties(this._entity);
        if (properties.indexOf(this.property < 0))
            throw new Error('Entity does not have an id');
        insertMeta(this._meta, 'class.entity.ids', this.property(),true);
    }
}