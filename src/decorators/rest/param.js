//usage: @param('id') searchClientById(id){...}
import { setMeta } from 'walas-meta-api';
import { onlyOnMethods } from '../utils';
export const param = function (...params) {
    return function (target, key, descriptor) {
        onlyOnMethods(descriptor, 'param');
        setMeta(target, `methods.${key}.params`, params[0], true);
    };
}