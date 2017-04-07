import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from '../../../api';

export class ConventionPost extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route() {
        return 'methods'
    }
    createMethod(method) {
        let url = '/:' + method.params.map(c => Object.keys(c)[0]).join('/:');
        method.verb = 'post';
        method.url = method.url || url;
        return method;
    }
    exec() {
        let methods = getMeta(this._meta, this.route);
        Object.keys(methods).forEach(key => {
            if (key.startsWith('post') && !methods[key].verb) {
                let route = this.route + '.'+ key;
                insertMeta(this._meta, route, this.createMethod(methods[key]));
            }
        });
    }
}
