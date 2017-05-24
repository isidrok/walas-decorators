//usage: @Param('id') searchClientById(id){...}
import { setMeta } from 'walas-meta-api';
import { check } from '../utils';
export const Param = function (...params) {
    return function (target, key, descriptor) {
        check.onlyOnMethods(descriptor, 'Param');
        setMeta(target, `methods.${key}.params.${params[0]}`, {});
    };
}