import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from '../../../api';

export class ConventionAutoGet extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
    get generators() {
        return 'class.generators';
    }
    get get() {
        return {
            verb: 'get',
            url: '/:id',
            params: [
                { id: {} }
            ]
        }
    }
    get getAll() {
        return { verb: 'get', url:'' }
    }
    insertGet() {
        let property = 'methods.get';
        insertMeta(this._meta, property, this.get());
    }
    insertGeAll() {
        let property = 'methods.getAll';
        insertMeta(this._meta, property, this.getAll());
    }
    exec() {
        let supressGet = Object.keys(getMeta(this._meta, this.generators)).filter(c => c === 'supressGet')[0];
        if (supressGet) return;
        this.insertGet();
        this.insertGetAll();

    }
}
