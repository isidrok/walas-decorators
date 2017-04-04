//usage: @Params('name','age') searchClientByNameAndAge(name,age){...}
import { setMeta } from '../api';
import { onlyOnMethods } from '../utils';
export const Params = function(...params) {
    return function(target, key, descriptor) {
        onlyOnMethods(descriptor, 'Params');
        setMeta(target, `methods.${key}.Params`, params, true);
    };
}