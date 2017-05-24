import { ConventionBase } from '../../conventionbase';
import { insertMeta, getMeta } from '../../../api';

export class ConventionHasMany extends ConventionBase {
    constructor(entity, meta) {
        super(entity, meta);
    }
}
/*
foo/:id/bar getAll
foo/:id/bar/:barid get by id
foo/:id/bar POST
foo/:id/bar/:barid delete
foo/:id/bar/:barid path
*/