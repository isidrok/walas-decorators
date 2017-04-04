//usage: @Summary('search client') searchClientByDni(dni){...}
import { setMeta } from '../api';
import { onlyOnMethods } from '../utils';
export const Summary = function(...params) {
    return function(target, key, descriptor) {
        onlyOnMethods(descriptor, 'Summary');
        setMeta(target, `methods.${key}.summary`, params[0]);
    };
}