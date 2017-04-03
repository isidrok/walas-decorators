//usage: @get('/:id?') searchClientById(id){...}
import { setMeta } from 'walas-meta-api';
import { onlyOnMethods } from '../utils';
export const setVerbsMeta = function (target, key, descriptor, verb, params) {
    onlyOnMethods(descriptor, verb);
    setMeta(target, `methods.${key}.${verb}`, params[0]);
}