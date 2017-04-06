import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from '../../../api';

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

    //TODO Schema
}
