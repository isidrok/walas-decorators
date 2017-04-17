import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from 'walas-meta-api';

/**
 * PRECONDITION: gets called after ConventionMethods
 * Finds all method whose name starts with 'delete'
 * and sets its verb to 'delete'
 * @export
 * @class ConventionDelete
 * @extends {ConventionBase}
 */
export class ConventionDelete extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route() {
        return 'methods'
    }
    createMethod(method) {
        //let url = '/:' + method.params.map(c => Object.keys(c)[0]).join('/:');
        method.verb = 'delete';
       // method.url = method.url || url;
        return method;
    }
    exec() {
        let methods = getMeta(this._meta, this.route);
        Object.keys(methods).forEach(key => {
            if (key.startsWith('delete') && !methods[key].verb) {
                let route = this.route + '.'+ key;
                insertMeta(this._meta, route, this.createMethod(methods[key]));
            }
        });
    }
}
