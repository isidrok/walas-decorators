//usage: @Params('name','age') searchClientByNameAndAge(name,age){...}
import { setMeta } from 'walas-meta-api';
import { onlyOnMethods } from '../utils';
export const Params = function (...params) {
    return function (target, key, descriptor) {
        onlyOnMethods(descriptor, 'Params');
        params.forEach(param => {
            let paramName = Object.keys(param)[0];
            setMeta(target, `methods.${key}.params.${paramName}`, param[paramName]);
        });
    };
}