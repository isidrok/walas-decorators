import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from '../../../api';

export class ConventionSummary extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route() {
        return 'methods';
    }
    createMethod(method) {
        method.summary = method.description;
        return method;
    }
    exec() {
        let methods = getMeta(this._meta, this.route);
        Object.keys(methods).forEach(key => {
            if (!methods[key].summary) {
                let route = this.route + '.' + key;
                insertMeta(this._meta, route, this.createMethod(methods[key]));
            }
        });
    }
}
