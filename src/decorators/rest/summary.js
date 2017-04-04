//usage: @summary('search client') searchClientByDni(dni){...}
import { setMeta } from '../api';
import { onlyOnMethods } from '../utils';
export const summary = function (...params) {
    return function (target, key, descriptor) {
        onlyOnMethods(descriptor, 'summary');
        setMeta(target, `methods.${key}.summary`, params[0]);
    };
}