//usage: @Summary('search client') searchClientByDni(dni){...}
import { setMeta } from 'walas-meta-api';
import { check } from '../utils';
export const Summary = function(...params) {
    return function(target, key, descriptor) {
        check.onlyOnMethods(descriptor, 'Summary');
        setMeta(target, `methods.${key}.summary`, params[0]);
    };
}