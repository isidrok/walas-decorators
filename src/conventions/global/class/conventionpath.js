import { plural } from 'pluralize';
import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from '../../../api';

/**
 * If the metainformation of the class does not have a path it will be build
 * using the pluralized name of the class and apending a backslash at the beggining
 * @export
 * @class ConventionPath
 * @extends {ConventionBase}
 */
export class ConventionPath extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route() {
        return 'class.path';
    }
    get property() {
        return `/${plural(this._entity.name.toLowerCase())}`
    }
    exec() {
        if (getMeta(this._meta, this.route)) return;
        insertMeta(this._meta, this.route, this.property);
    }
}