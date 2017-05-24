import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from '../../../api';

/**
 * PRECONDITION: gets called after applying ConventionMethods
 * If the method doesn't have a description then its name
 * will be used, transforming it from cammel or dash case 
 * to a phrase starting in upper case.
 * @export
 * @class ConventionDescription
 * @extends {ConventionBase}
 */
export class ConventionDescription extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get route() {
        return 'methods';
    }
    createMethod(method, name) {
        function parseName() {
            name = name.replace(/([A-Z])/g,  ($1 => " " + $1.toLowerCase()))
                .replace(/([-_])/g, ($1 => " " ));
            return name.charAt(0).toUpperCase() + name.slice(1);
        }
        method.description = parseName();
        return method;
    }
    exec() {
        let methods = getMeta(this._meta, this.route);
        Object.keys(methods).forEach(key => {
            if (!methods[key].description) {
                let route = this.route + '.' + key;
                insertMeta(this._meta, route, this.createMethod(methods[key], key));
            }
        });
    }
}
