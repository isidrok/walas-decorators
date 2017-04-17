import { ConventionBase } from '../../conventionbase';
import { getProperties } from '../../utils';
import { insertMeta, getMeta } from 'walas-meta-api';

/**
 * If the 'ids' property of the metainformation related to the class is empty,
 * the attribute of the class called 'id' will be inserted in the 'ids' of the class.
 * If there are not ids for the class an Error will be thrown.
 * @export
 * @class ConventionId
 * @extends {ConventionBase}
 */
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
