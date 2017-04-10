import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from '../../../api';

/**
 * Inserts in class.queryable the name of all queryable entities
 * which are the current entity and the entities referenced by
 * the class attributes flagged with hasOne or hasMany
 * @export
 * @class ConventionQueryable
 * @extends {ConventionBase}
 */
export class ConventionQueryable extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route() {
        return 'class.queryable';
    }
    get properties() {
        return 'properties';
    }
    exec() {
        let queryables = getMeta(this._meta, this.route);
        let properties = getMeta(this._meta, this.properties) || {};
        Object.keys(properties).forEach(key => {
            let relation = properties[key].hasMany || properties[key].hasOne;
            if (relation && queryables.indexOf(relation) === -1)
                insertMeta(this._meta, this.route, relation, true);
        });
        if (queryables.indexOf(this._entity.name) === -1)
        insertMeta(this._meta, this.route, this._entity.name, true);
    }
}