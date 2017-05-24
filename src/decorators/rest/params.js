//usage: @Params('name','age') searchClientByNameAndAge(name,age){...}
import { setMeta } from 'walas-meta-api';
import { check } from '../utils';
export const Params = function (...params) {
    return function (target, key, descriptor) {
        check.onlyOnMethods(descriptor, 'Params');
        params.forEach(param => {
            setMeta(target, `methods.${key}.params.${param}`, {});
        });
    };
}