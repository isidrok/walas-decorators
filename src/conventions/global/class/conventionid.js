import { ConventionBase } from '../../conventionbase';
import { getProperties } from '../../utils';
import { setMeta } from '../../../api';
export class ConventionId extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get property() {
        return 'id';
    }
    exec() {
        let ids = this.meta.class && this.meta.class.ids;
        if (ids) return;
        let properties = getProperties(this.entity);
        if (properties.indexOf(this.property()) < 0)
            throw new Error('Entity does not have an id');
        //TODO new SetMeta that does not require target
        setMeta(this.entity, 'class.entity.ids', this.property(),true);
    }
}