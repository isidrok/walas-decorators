//usage: @params('name','age') searchClientByNameAndAge(name,age){...}
import { setMeta } from '../api';
import { onlyOnMethods } from '../utils';
export const params = function (...params) {
    return function (target, key, descriptor) {
        onlyOnMethods(descriptor, 'params');
        setMeta(target, `methods.${key}.params`, params, true);
    };
}