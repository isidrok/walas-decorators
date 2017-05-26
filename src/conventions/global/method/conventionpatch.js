import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from 'walas-meta-api';

/**
 * PRECONDITION: gets called after ConventionMethods
 * Finds all method whose name starts with 'patch'
 * and sets its verb to 'patch'
 * @export
 * @class ConventionPatch
 * @extends {ConventionBase}
 */
export class ConventionPatch extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route() {
        return 'methods'
    }
    createMethod(method) {
        //let url = '/:' + method.params.map(c => Object.keys(c)[0]).join('/:');
        method.verb = 'patch';
        // method.url = method.url || url;
        return method;
    }
    exec() {
        let methods = getMeta(this._meta, this.route) || {};
        Object.keys(methods).forEach(key => {
            if (key.startsWith('patch') && !methods[key].verb) {
                let route = this.route + '.'+ key;
                insertMeta(this._meta, route, this.createMethod(methods[key]));
            }
        });
    }
}
