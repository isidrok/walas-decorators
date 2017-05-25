import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from 'walas-meta-api';

/**
 * If the class is not flagged with 'supressGet' then
 * the methods get and getAll will be automatically generated
 * @export
 * @class ConventionAutoGet
 * @extends {ConventionBase}
 */
export class ConventionAutoGet extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get generators() {
        return 'class.generators';
    }
    insertGet() {
        let get = {
            verb: 'get',
            url: '/:id',
            params: { id: {} }
        };
        let property = 'methods.get';
        insertMeta(this._meta, property, get);
    }
    insertGetAll() {
        let getAll = { verb: 'get', url: '' };
        let property = 'methods.getAll';
        insertMeta(this._meta, property, getAll);
    }
    exec() {
        let supressGet
        let generators = getMeta(this._meta, this.generators);
        if (generators)
            supressGet = Object.keys(generators).filter(c => c === 'supressGet')[0];
        if (supressGet) return;
        this.insertGet();
        this.insertGetAll();

    }
}
