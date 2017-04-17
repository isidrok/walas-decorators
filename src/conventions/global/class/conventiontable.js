//TODO Schema
import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from 'walas-meta-api';

/**
 * If the 'table' property of 'class.entity' is not set
 * then the name of the class will be used.
 * @export
 * @class ConventionTable
 * @extends {ConventionBase}
 */
export class ConventionTable extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route() {
        return 'class.entity.table';
    }
    exec() {
        if (getMeta(this._meta,this.route)) return;
        insertMeta(this._meta, this.route, this._entity.name);
    }
}

